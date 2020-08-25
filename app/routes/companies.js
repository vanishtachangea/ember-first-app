import Route from '@ember/routing/route';

export default class CompaniesRoute extends Route {
    model() {
        return ['Company A Gmbh', 'Company B Gmbh', 'Company C Gmbh'];
      }
}


