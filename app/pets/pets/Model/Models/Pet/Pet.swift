//
//  Pet.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct Pet: Codable {
    let _id: String
    var name: String
    var age: String
    var gender: String
    var agressive: Bool
    var image: String?
    var breed: String
    
    var dictionaryRepresentation: [String: Any] {
        return [
            "name" : name,
            "age" : age,
            "gender" : gender,
            "agressive" : agressive,
            "image" : image ?? "",
            "breed" : breed,
            "personID": CommonData.shared.user.person?._id ?? ""
        ]
    }
}

typealias Pets = [Pet]
