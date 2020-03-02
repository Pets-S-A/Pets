//
//  Pet.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct Pet: Codable {
    let id: String
    var name: String
    var age: String
    var gender: String
    var agressive: Bool
    var image: String
    var breed: String
}

typealias Pets = [Pet]
