//
//  ServerAnswer.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

public struct ServerAnswer<T: Codable>: Codable {
    var success: Bool?
    var message: String?
    var content: T?
}
