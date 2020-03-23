//
//  User.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct User: Codable {
    let _id: String?
    var email: String
    var name: String
    var password: String
    var access: [String]?
    var person: Person?
    
    var dictionaryRepresentation: [String: Any] {
        return [
            "email" : email,
            "name" : name,
            "password" : password,
            "application": "json"
        ]
    }
}

typealias Users = [User]
