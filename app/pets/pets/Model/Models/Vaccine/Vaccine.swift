//
//  Vaccine.swift
//  vaccines
//
//  Created by Matheus Silva on 25/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//


import Foundation

struct Vaccine: Codable {
    let _id: String?
    var name: String
    var date: String
    
    func dictionaryRepresentation(pet: Pet) -> [String: Any] {
        
        return [
            "name": name,
            "date": date,
            "petID": pet._id
        ]
    }
    
    func remove(petID: String) {
        let index = CommonData.shared.user.person?.pets?.firstIndex(where: { (pet) -> Bool in
            return petID == pet._id
        })
        if var pets = CommonData.shared.user.person?.pets, let index = index?.byteSwapped  {
            pets[index].vaccines?.removeAll(where: { (vaccine) -> Bool in
                return vaccine._id == _id
            })
            CommonData.shared.user.person?.pets = pets
        }
    }
}

typealias Vaccines = [Vaccine]
