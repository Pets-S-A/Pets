//
//  Server.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct ENV {
    public static let production = false
    
    public static var server: String {
        return ENV.production ? "" : "http://localhost/api"
    }
    public static var token: [String: String] {
        return ["master-token": "token"]
    }
}
