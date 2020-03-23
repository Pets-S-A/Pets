//
//  User.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct Person: Codable {
    let _id: String?
    var name: String
    var image: String
    var pets: Pets?
    
    var dictionaryRepresentation: [String: Any] {
        return [
            "name" : name,
            "image" : image,
            "userID" : CommonData.shared.user._id ?? ""
        ]
    }
}

typealias Persons = [Person]
