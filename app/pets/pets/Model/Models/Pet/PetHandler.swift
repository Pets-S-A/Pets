//
//  PetHandler.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

enum PetLoadResponse: Error {
    case success(answer: Pets)
    case error(description: String)
}

enum PetOneResponse: Error {
    case success(answer: Pet)
    case error(description: String)
}

enum PetShareResponse: Error {
    case success(answer: String)
    case error(description: String)
}

class PetHandler {
    public static let BASE_URL: String = "\(Environment.SERVER_URL)/pet"

    static func create(params: [String: Any], withCompletion completion: @escaping (PetOneResponse) -> Void) {
        APIRequests.postRequest(url: "\(BASE_URL)/create",
            params: params,
            decodableType: ServerAnswer<Pet>.self) { (response) in
                switch response {
                case .result(let answer as ServerAnswer<Pet>):
                    guard let result = answer.success,
                        let pet = answer.content,
                        result
                        else {
                            completion(PetOneResponse.error(description: "Answer is false"))
                            return
                    }
                    completion(PetOneResponse.success(answer: pet))
                case .error(let error):
                    completion(PetOneResponse.error(description: error.localizedDescription))
                default:
                    completion(PetOneResponse.error(description: "Error to convert data"))
                }
        }
    }
    static func getAll(withCompletion completion: @escaping (PetLoadResponse) -> Void) {

        guard let userID = CommonData.shared.user._id else {
            fatalError("Cadê o userID?")
        }

        APIRequests
            .getRequest(
                url: "\(BASE_URL)/allByUserID/\(userID)",
                decodableType: ServerAnswer<Pets>.self,
                header: Environment.TOKEN
            ) { (response) in
                switch response {
                case .result(let answer as ServerAnswer<Pets>):
                    if answer.success ?? false {
                        let pets = answer.content ?? []
                        completion(PetLoadResponse.success(answer: pets))
                    } else {
                        completion(PetLoadResponse.error(description: answer.message ?? ""))
                    }
                case .error(let error):
                    completion(PetLoadResponse.error(description: error.localizedDescription))
                default:
                    completion(PetLoadResponse.error(description: "Error to convert data"))
                }
        }
    }
    static func share(id: String, withCompletion completion: @escaping (PetShareResponse) -> Void) {
        APIRequests.postRequest(url: "\(BASE_URL)/shared/getProvisoryID",
        params: ["petID": id], decodableType: ServerAnswer<Share>.self) { (response) in
                switch response {
                case .result(let answer as ServerAnswer<Share>):
                    if let content = answer.content {
                        completion(PetShareResponse.success(answer: content.provisoryID))
                    } else {
                        completion(PetShareResponse.error(description: "Don't have content"))
                    }
                case .error(let error):
                    completion(PetShareResponse.error(description: error.localizedDescription))
                default:
                    completion(PetShareResponse.error(description: "Error to convert data"))
                }
        }
    }
    static func getOne(id: String, withCompletion
        completion: (PetOneResponse) -> Void) {
        completion(PetOneResponse.error(description: "Not implementation"))
    }
    static func update(pet: Pet, withCompletion completion: (PetOneResponse) -> Void) {
        completion(PetOneResponse.error(description: "Not implementation"))
    }
    public static func delete(id: Int, completion: @escaping (PetOneResponse) -> Void) {
        completion(PetOneResponse.error(description: "Not implementation"))
    }
}
