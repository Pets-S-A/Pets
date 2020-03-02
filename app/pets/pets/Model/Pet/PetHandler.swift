//
//  PetHandler.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

enum PetLoadResponse: Error {
    case success(pets: Pets)
    case error(description: String)
}

enum PetUpdateResponse: Error {
    case success(pet: Pet)
    case error(description: String)
}

class PetHandler {
    static func create(pet: Pet, withCompletion completion: (PetUpdateResponse) -> Void) {
        do {
            try PetDAO.shared.create(newEntity: pet)
            completion(PetUpdateResponse.success(pet: pet))
        } catch {
            completion(PetUpdateResponse.error(description: error.localizedDescription))
        }
    }
    static func getAll(completion: @escaping (PetLoadResponse) -> Void) {
        do {
            let pets = try PetDAO.shared.read()
            completion(PetLoadResponse.success(pets: pets))
        } catch {
            completion(PetLoadResponse.error(description: error.localizedDescription))
        }
    }
    static func getOne(id: String, withCompletion
        completion: (PetUpdateResponse) -> Void) {
        do {
            let pet = try PetDAO.shared.readOne(id: id)
            completion(PetUpdateResponse.success(pet: pet))
        } catch {
            completion(PetUpdateResponse.error(description: error.localizedDescription))
        }
    }
    static func update(pet: Pet, withCompletion completion: (PetUpdateResponse) -> Void) {
        do {
            try PetDAO.shared.update(entity: pet)
            completion(PetUpdateResponse.success(pet: pet))
        } catch {
            completion(PetUpdateResponse.error(description: error.localizedDescription))
        }
    }
    static func delete(pet: Pet, withCompletion
        completion: (PetUpdateResponse) -> Void) {
        do {
            try PetDAO.shared.delete(id: pet.id)
            completion(PetUpdateResponse.success(pet: pet))
        } catch {
            completion(PetUpdateResponse.error(description: error.localizedDescription))
        }
    }
    static private func saveLocally(_ pets: Pets) {
        for pet in pets {
            do {
                try PetDAO.shared.create(newEntity: pet)
            } catch {
                NSLog("Error to save task \"\(pet.name)\" locally")
            }
        }
    }
}
