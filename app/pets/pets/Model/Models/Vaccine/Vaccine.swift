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
}

typealias Vaccines = [Vaccine]
