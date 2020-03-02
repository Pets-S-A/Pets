//
//  PetDAO.swift
//  pets
//
//  Created by Matheus Silva on 01/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

import CoreData

class PetDAO: GenericDAO {
    typealias T = Pet
    let managedContext = CoreDataManager.shared.persistentContainer.viewContext
    private let entityName = "PrayEntity"
    static let shared: PetDAO = PetDAO()
    private init() {}
    func create(newEntity: Pet) throws {
        guard let prayEntity = NSEntityDescription.entity(forEntityName: self.entityName, in: managedContext) else {
            throw DAOError.internalError(description: "Failed to create NSEntityDescription Entity")
        }
        guard let pray = NSManagedObject(entity: prayEntity, insertInto: managedContext) as? PetEntity else {
            throw DAOError.internalError(description: "Failed to create NSManagedObject")
        }
        pray.id       = newEntity.id
        pray.name       = newEntity.name
        pray.image      = newEntity.image
        pray.breed       = newEntity.breed
        pray.age       = newEntity.age
        
        do {
            try managedContext.save()
        } catch {
            throw DAOError.internalError(description: "Problem to save Task using CoreData")
        }
    }
    func read() throws -> Pets {
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: self.entityName)
        do {
            let result = try managedContext.fetch(fetchRequest)
            guard let prayData = result as? [PetEntity] else {
                throw DAOError.internalError(description: "Error to cast fetch result to [PetEntity]")
            }
            var pets: Pets = []
            for data in prayData {
                pets.append(
                    Pet(id: data.id ?? "", name: data.name ?? "", age: data.age ?? Date(), gender: data.gender ?? "", agressive: data.agressive, image: data.image ?? "", breed: data.breed ?? "")
                )
            }
            return pets
        } catch {
            throw DAOError.internalError(description: error.localizedDescription)
        }
    }
    func readOne(id uuid: String) throws -> Pet {
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: self.entityName)
        fetchRequest.fetchLimit = 1
        fetchRequest.predicate = NSPredicate(format: "uuid == %@", uuid)
        do {
            let result = try managedContext.fetch(fetchRequest)
            if result.count != 0 {
                guard let pet = result[0] as? NSManagedObject else {
                    throw DAOError.internalError(description: "Error to take prayer:NSManagedObject")
                }
                guard let id: String = pet.value(forKey: "id") as? String else {
                    throw DAOError.internalError(description: "Error to take id")
                }
                guard let name: String = pet.value(forKey: "name") as? String else {
                    throw DAOError.internalError(description: "Error to take name")
                }
                guard let age: Date = pet.value(forKey: "age") as? Date else {
                    throw DAOError.internalError(description: "Error to take age")
                }
                guard let image: String = pet.value(forKey: "image") as? String else {
                    throw DAOError.internalError(description: "Error to take image")
                }
                guard let gender: String = pet.value(forKey: "gender") as? String else {
                    throw DAOError.internalError(description: "Error to take gender")
                }
                guard let agressive: Bool = pet.value(forKey: "agressive") as? Bool else {
                    throw DAOError.internalError(description: "Error to take agressive")
                }
                guard let breed: String = pet.value(forKey: "breed") as? String else {
                    throw DAOError.internalError(description: "Error to take breed")
                }
                
                return Pet(id: id, name: name, age: age, gender: gender, agressive: agressive, image: image, breed: breed)
            } else {
                throw DAOError.internalError(description: "Pet not found")
            }
        } catch {
            throw DAOError.internalError(description: error.localizedDescription)
        }
    }
    func update(entity: Pet) throws {
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: self.entityName)
        fetchRequest.fetchLimit = 1
        fetchRequest.predicate = NSPredicate(format: "uuid == %@", entity.id)
        do {
            let result = try managedContext.fetch(fetchRequest)
            if result.count != 0 {
                guard let pray = result[0] as? NSManagedObject else {
                    throw DAOError.internalError(description: "Error to take prayer:NSManagedObject")
                }
                pray.setValue(entity.name, forKeyPath: "name")
                pray.setValue(entity.age, forKeyPath: "age")
                pray.setValue(entity.image, forKeyPath: "image")
                pray.setValue(entity.gender, forKeyPath: "gender")
                pray.setValue(entity.agressive, forKeyPath: "agressive")
                pray.setValue(entity.breed, forKeyPath: "breed")
                
                do {
                    try managedContext.save()
                } catch {
                    throw DAOError.internalError(description: error.localizedDescription)
                }
            } else {
                throw DAOError.internalError(description: "Pet not found")
            }
        } catch {
            throw DAOError.internalError(description: error.localizedDescription)
        }
    }
    func delete(id: String) throws {
        let fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: self.entityName)
        fetchRequest.fetchLimit = 1
        fetchRequest.predicate = NSPredicate(format: "uuid == %@", id)
        do {
            let result = try managedContext.fetch(fetchRequest)
            if result.count != 0 {
                let objectToDelete = result[0] as? NSManagedObject
                if objectToDelete != nil {
                    managedContext.delete(objectToDelete!)
                    do {
                        try managedContext.save()
                    } catch {
                        throw DAOError.internalError(description: "Pet not posible deleted")
                    }
                }
            } else {
                throw DAOError.internalError(description: "Pet not found")
            }
        } catch {
            throw DAOError.internalError(description: error.localizedDescription)
        }
    }
}
