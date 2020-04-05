//
//  PersonHandler.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

enum PersonLoadResponse: Error {
    case success(answer: Persons)
    case error(description: String)
}

enum PersonOneResponse: Error {
    case success(answer: Person)
    case error(description: String)
}

enum PersonTokenResponse: Error {
    case success(answer: Person, token: String)
    case error(description: String)
}

class PersonHandler {
    public static let BASE_URL:String = "\(Environment.SERVER_URL)/person"
    
    static func create(person: Person, withCompletion completion: @escaping (PersonOneResponse) -> Void) {
        APIRequests.postRequest(url: "\(BASE_URL)/create", params: person.dictionaryRepresentation, decodableType: ServerAnswer<Person>.self) {
            (response) in
            switch response {
            case .result(let answer as ServerAnswer<Person>):
                if (answer.success ?? false) {
                    if let person = answer.content {
                        completion(PersonOneResponse.success(answer: person))
                    } else {
                        completion(PersonOneResponse.error(description: (String(describing: "Not have person"))))
                    }
                } else {
                    completion(PersonOneResponse.error(description: (String(describing: answer.message))))
                }
            case .error(let error):
                completion(PersonOneResponse.error(description: error.localizedDescription))
            default:
                completion(PersonOneResponse.error(description: "Error to convert data"))
            }
        }
    }
    static func getAll(personID: String, withCompletion completion: @escaping (PersonLoadResponse) -> Void) {
        completion(PersonLoadResponse.error(description: "Not implementation"))
        
    }
    static func getOne(id: String, withCompletion
        completion: (PersonOneResponse) -> Void) {
        completion(PersonOneResponse.error(description: "Not implementation"))
        
    }
    static func update(person: Person, withCompletion completion: @escaping (PersonOneResponse) -> Void) {
        APIRequests.postRequest(url: "\(BASE_URL)/update", params: person.dictionaryRepresentationUpdate, decodableType: ServerAnswer<Person>.self) {
            (response) in
            switch response {
            case .result(let answer as ServerAnswer<Person>):
                if (answer.success ?? false) {
                    if let person = answer.content {
                        completion(PersonOneResponse.success(answer: person))
                    } else {
                        completion(PersonOneResponse.error(description: (String(describing: "Not have person"))))
                    }
                } else {
                    completion(PersonOneResponse.error(description: (String(describing: answer.message))))
                }
            case .error(let error):
                completion(PersonOneResponse.error(description: error.localizedDescription))
            default:
                completion(PersonOneResponse.error(description: "Error to convert data"))
            }
        }
    }
    public static func delete(id: Int, withCompletion completion: @escaping (PersonOneResponse) -> Void) {
        completion(PersonOneResponse.error(description: "Not implementation"))
        
    }
}
