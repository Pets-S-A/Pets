//
//  GenericDAO.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

enum DAOError: Error {
    case invalidData(description: String)
    case internalError(description: String)
}

protocol GenericDAO {
    associatedtype T
    func create(newEntity: T) throws
    func read() throws -> [T]
    func readOne(id: String) throws -> T
    func update(entity: T) throws
    func delete(id: String) throws
}
