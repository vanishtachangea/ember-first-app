import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CompanyListComponent extends Component {
  @action
  showCompany(company) {
    alert(`The company's name is ${company}!`);
  }
}