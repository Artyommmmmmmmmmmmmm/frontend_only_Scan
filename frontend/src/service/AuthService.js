import $api from '../http/index'
import {AxiosResponse}from 'axios'
import {BASE_URL} from '../global_const'

export default class AuthService {
    static login = (login, password) => {
        return $api.post( BASE_URL + '/api/v1/account/login', {
            login: login,
            password: password
        })
    }
    static info = () => {
        return $api.get(BASE_URL + '/api/v1/account/info')
    }
    static histograms = (request) => {
          
        return $api.post( BASE_URL + '/api/v1/objectsearch/histograms', request);
    }
    static documentIds = (request) => {
        
      return $api.post( BASE_URL + '/api/v1/objectsearch', request);
    }
    static documents = (array) => {
      const response = $api.post( BASE_URL + '/api/v1/documents', {ids : array});
      return response
    }
    static persons = (num) => {
        return $api.post(BASE_URL + '/api/v1/entities/persons', [num])
    }   
    static history = () => {
        return $api.get(BASE_URL + '/api/v1/account/purchaseHistory')
    }
}

// {         
//   "issueDateInterval": {
//     "startDate": startDate,
//     "endDate": endDate
//   },
//   "searchContext": {
//     "targetSearchEntitiesContext": {
//       "targetSearchEntities": [
//         {
//           "type": "company",
//           "sparkId": null,
//           "entityId": null,
//           "inn": inn,
//           "maxFullness": maxFullness,
//           "inBusinessNews": inBusinessNews
//         }
//       ],
//       "onlyMainRole": onlyMainRole,
//       "tonality": tonality,
//       "onlyWithRiskFactors": onlyWithRiskFactors,
//   },
//   "attributeFilters": {
//     "excludeTechNews": excludeTechNews,
//     "excludeAnnouncements": excludeAnnouncements,
//     "excludeDigests": excludeDigests
//   },
//   "similarMode": "duplicates",
//   "limit": limit,
//   "sortType": "sourceInfluence",
//   "sortDirectionType": "desc",
//   "intervalType": "month",
//   "histogramTypes": [
//     "totalDocuments",
//     "riskFactors"
//   ]
// }
