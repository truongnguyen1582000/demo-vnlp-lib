import { Component } from '@angular/core';
import { DatepickerOptions } from '@em-and-ai/ui-sdk/vnlp-calendar/src/models/vnlp-calendar.model';
import locale from 'date-fns/locale/vi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date: Date = new Date();
  options: DatepickerOptions = {
    locale: locale,
    selectRange: false,
    placeholder: 'dd/mm/yyyy',
  };
  demoChecked = false;
  demoCheckboxData = [
    { title: 'option 1', checked: false },
    { title: 'option 2', checked: true },
    { title: 'option 3', checked: false },
    { title: 'option 4', checked: false },
    { title: 'option 5', checked: true },
  ];
  demoSwitch = false;
  demoInputValue = '';

  dataSource = [
    {
      value: 'hello',
      entity_type: 'greeting',
      intent: 'greet',
    },
    {
      value: 'how are you',
      entity_type: 'question',
      intent: 'ask',
    },
    {
      value: 'goodbye',
      entity_type: 'farewell',
      intent: 'farewell',
    },
    {
      value: 'buy',
      entity_type: 'action',
      intent: 'order',
    },
    {
      value: 'cancel',
      entity_type: 'action',
      intent: 'cancel',
    },
    {
      value: 'pizza',
      entity_type: 'food',
      intent: 'order',
    },
    {
      value: 'hamburger',
      entity_type: 'food',
      intent: 'order',
    },
    {
      value: 'water',
      entity_type: 'drink',
      intent: 'order',
    },
    {
      value: 'coke',
      entity_type: 'drink',
      intent: 'order',
    },
  ];

  columns = [
    {
      title: 'Name',
      key: 'value',
      sortable: true,
    },
    {
      title: 'Entity type',
      key: 'entity_type',
      sortable: true,
    },
    {
      title: 'Intent',
      key: 'intent',
      sortable: false,
    },
  ];

  switcherList = [
    { title: 'Section 1', icon: 'lamp-slash-linear', key: 'key1' },
    { title: 'Section 2', icon: 'lovely-linear', key: 'key2' },
  ];

  switcherListIcon = [
    { title: '', icon: 'lamp-slash-linear', key: 'key1' },
    { title: '', icon: 'lovely-linear', key: 'key2' },
  ];

  switcherListLong = [
    { title: 'Section 1', icon: 'lamp-slash-linear', key: 'key1' },
    { title: 'Section 2', icon: 'lovely-linear', key: 'key2' },
    { title: 'Section 1', icon: 'lamp-slash-linear', key: 'key3' },
    { title: 'Section 1', icon: 'lamp-slash-linear', key: 'key1' },
  ];

  handleBindingDataChange(data: any) {
    console.log(data);
  }

  handleBindingDataTableChange(data: any) {
    console.log(data);
  }
  listData = [
    { id: 1, value: 'Codecademy', isSelected: true },
    { id: 2, value: 'Coursera', isSelected: false },
    { id: 3, value: 'Khan Academy', isSelected: false },
    { id: 4, value: 'LinkedIn Learning', isSelected: false },
    { id: 5, value: 'Open Culture', isSelected: true },
    { id: 6, value: 'Sophia', isSelected: true },
    { id: 7, value: 'Teacher Training Videos', isSelected: false },
    { id: 8, value: 'Udemy', isSelected: true },
    { id: 9, value: 'Virtual Nerd Mobile Math', isSelected: false },
    { id: 10, value: 'Techsmith', isSelected: false },
  ];

  dateRange: Date = new Date();
  optionsRange: DatepickerOptions = {
    locale: locale,
    selectRange: true,
  };

  dropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
    placeholder: 'Placeholder',
    dropdownWidth: '321px',
  };

  getDropdownValue(selectedItems: any) {
    console.log(selectedItems);
  }
  getMultiselectValue(selectedItems: any) {
    console.log(selectedItems);
  }
}
