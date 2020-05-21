//
//  VaccineHandler.swift
//  vaccines
//
//  Created by Matheus Silva on 25/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

enum VaccineLoadResponse: Error {
    case success(answer: Vaccines)
    case error(description: String)
}

enum VaccineOneResponse: Error {
    case success(answer: Vaccine)
    case error(description: String)
}

class VaccineHandler {
    public static let BASE_URL: String = "\(Environment.SERVER_URL)/vaccine"

    static func create(params: [String: Any], withCompletion completion: @escaping (VaccineOneResponse) -> Void) {
        APIRequests.postRequest(url: "\(BASE_URL)/create",
                                params: params,
                                decodableType: ServerAnswer<Vaccine>.self) { (response) in
            switch response {
            case .result(let answer as ServerAnswer<Vaccine>):
                guard let result = answer.success,
                    let vaccine = answer.content,
                    result

                    else {
                        if let message = answer.message {
                            completion(VaccineOneResponse
                                .error(description: message))
                        } else {
                            completion(VaccineOneResponse
                                .error(description: "Answer is false"))
                        }
                        return
                }
                completion(VaccineOneResponse.success(answer: vaccine))
            case .error(let error):
                completion(VaccineOneResponse.error(description: error.localizedDescription))
            default:
                completion(VaccineOneResponse.error(description: "Error to convert data"))
            }
        }
    }
    static func getAll(withCompletion completion: @escaping (VaccineLoadResponse) -> Void) {

        guard let userID = CommonData.shared.user._id else {
            fatalError("Cadê o userID?")
        }

        APIRequests
            .getRequest(
                url: "\(BASE_URL)/allByUserID/\(userID)",
                decodableType: ServerAnswer<Vaccines>.self,
                header: Environment.TOKEN
            ) { (response) in
                switch response {
                case .result(let answer as ServerAnswer<Vaccines>):
                    if answer.success ?? false {
                        let vaccines = answer.content ?? []
                        completion(VaccineLoadResponse.success(answer: vaccines))
                    } else {
                        completion(VaccineLoadResponse.error(description: answer.message ?? ""))
                    }
                case .error(let error):
                    completion(VaccineLoadResponse.error(description: error.localizedDescription))
                default:
                    completion(VaccineLoadResponse.error(description: "Error to convert data"))
                }
            }
    }
    static func getOne(id: String, withCompletion
        completion: (VaccineOneResponse) -> Void) {
        completion(VaccineOneResponse.error(description: "Not implementation"))
    }
    static func update(vaccine: Vaccine, withCompletion completion: @escaping (VaccineOneResponse) -> Void) {
        let params = vaccine.dictionaryRepresentation(pet: nil)
        APIRequests.postRequest(url: "\(BASE_URL)/update",
                                params: params,
                                decodableType: ServerAnswer<Vaccine>.self) { (response) in
            switch response {
            case .result(let answer as ServerAnswer<Vaccine>):
                guard let result = answer.success,
                    let vaccine = answer.content,
                    result

                    else {
                        if let message = answer.message {
                            completion(VaccineOneResponse
                                .error(description: message))
                        } else {
                            completion(VaccineOneResponse
                                .error(description: "Answer is false"))
                        }
                        return
                }
                completion(VaccineOneResponse.success(answer: vaccine))
            case .error(let error):
                completion(VaccineOneResponse.error(description: error.localizedDescription))
            default:
                completion(VaccineOneResponse.error(description: "Error to convert data"))
            }
        }
    }
    public static func delete(id: String, completion: @escaping (VaccineOneResponse) -> Void) {
        APIRequests
            .getRequest(
                url: "\(BASE_URL)/delete/\(id)",
                decodableType: ServerAnswer<Vaccine>.self,
                header: Environment.TOKEN
            ) { (response) in
                switch response {
                case .result(let answer as ServerAnswer<Vaccine>):
                    if (answer.success ?? false), let vaccine = answer.content {
                        completion(VaccineOneResponse.success(answer: vaccine))
                    } else {
                        completion(VaccineOneResponse.error(description: answer.message ?? ""))
                    }
                case .error(let error):
                    completion(VaccineOneResponse.error(description: error.localizedDescription))
                default:
                    completion(VaccineOneResponse.error(description: "Error to convert data"))
                }
        }

    }
}
