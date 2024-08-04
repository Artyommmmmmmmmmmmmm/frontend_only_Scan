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
    static histograms = (
        startDate, endDate, inn, limit, 
        maxFullness, inBusinessNews, onlyMainRole,
        tonality, onlyWithRiskFactors, excludeTechNews,
        excludeAnnouncements, excludeDigests) => {
          
        return $api.post( BASE_URL + '/api/v1/objectsearch/histograms', 
          {
            issueDateInterval: {
              startDate: `${startDate}T00:00:00+03:00`,
              endDate: `${endDate}T23:59:59+03:00`
            },
            searchContext: {
              targetSearchEntitiesContext: {
                targetSearchEntities: [{
                  type: "company",
                  inn: inn,
                  maxFullness: maxFullness,
                }],
                onlyMainRole: onlyMainRole,
                tonality: tonality,
                onlyWithRiskFactors: onlyWithRiskFactors,
              }
            },
            attributeFilters: {
              excludeTechNews: excludeTechNews,
              excludeAnnouncements: excludeAnnouncements,
              excludeDigests: excludeDigests,
            },
            limit: Number(limit),
            sortType: "sourceInfluence",
            sortDirectionType: "desc",
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"]
          });
    }
    static documentIds = (
      startDate, endDate, inn, limit, 
      maxFullness, inBusinessNews, onlyMainRole,
      tonality, onlyWithRiskFactors, excludeTechNews,
      excludeAnnouncements, excludeDigests) => {
        
      return $api.post( BASE_URL + '/api/v1/objectsearch', 
        {
          issueDateInterval: {
            startDate: `${startDate}T00:00:00+03:00`,
            endDate: `${endDate}T23:59:59+03:00`
          },
          searchContext: {
            targetSearchEntitiesContext: {
              targetSearchEntities: [{
                type: "company",
                inn: inn,
                maxFullness: maxFullness,
              }],
              onlyMainRole: onlyMainRole,
              tonality: tonality,
              onlyWithRiskFactors: onlyWithRiskFactors,
            }
          },
          attributeFilters: {
            excludeTechNews: excludeTechNews,
            excludeAnnouncements: excludeAnnouncements,
            excludeDigests: excludeDigests,
          },
          limit: Number(limit),
          sortType: "sourceInfluence",
          sortDirectionType: "desc",
          intervalType: "month",
          histogramTypes: ["totalDocuments", "riskFactors"]
        });
    }
    static documents = (array) => {
      return $api.post( BASE_URL + '/api/v1/documents', 
        {ids : array}
        );
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
