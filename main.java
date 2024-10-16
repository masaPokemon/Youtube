final WebHistory history = webEngine.getHistory();
history.getEntries().addListener(new 
    ListChangeListener<WebHistory.Entry>() {
        @Override
        public void onChanged(Change<? extends Entry> c) {
            c.next();
            for (Entry e : c.getRemoved()) {
                comboBox.getItems().remove(e.getUrl());
            }
            for (Entry e : c.getAddedSubList()) {
                comboBox.getItems().add(e.getUrl());
            }
        }
    }
);
         
comboBox.setPrefWidth(60);
comboBox.setOnAction(new EventHandler<ActionEvent>() {
    @Override
    public void handle(ActionEvent ev) {
        int offset =
                comboBox.getSelectionModel().getSelectedIndex()
                - history.getCurrentIndex();
        history.go(offset);
    }
});
