//
//  User.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct User: Codable {
    let id: String
    var name: String
    var age: String
    var gender: String
    var agressive: Bool
    var image: String
    var breed: String
    
    var dictionaryRepresentation: [String: Any] {
        return [
            "id" : id,
            "name" : name,
            "age" : age,
            "gender" : gender,
            "agressive" : agressive,
            "image" : image,
            "breed" : breed
        ]
    }
}
