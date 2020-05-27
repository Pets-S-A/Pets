//
//  UITableViewCell+Extensions.swift
//  pets
//
//  Created by Matheus Silva on 26/04/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

public extension UICollectionView {
    /// Registers a cell from a nib with a reuse identifier set to the class name.
    func register<T: UICollectionViewCell>(_ cellType: T.Type, bundle: Bundle? = nil) {
        register(UINib(nibName: String(describing: cellType),
                       bundle: bundle),
                 forCellWithReuseIdentifier: String(describing: cellType))
    }
    /// Registers a cell from its class with a reuse identifier set to the class name.
    /// Use this call when you have created a cell class with no associated nib.
    func register<T: UICollectionViewCell>(fromClass cellType: T.Type) {
        register(cellType, forCellWithReuseIdentifier: String(describing: cellType))
    }
    /// Dequeue a registered cell for an index path with a reuse identifier set to the class name.
    /// - Returns: Strongly typed object of the correct type.
    func dequeue<T: UICollectionViewCell>(_ cellType: T.Type, for indexPath: IndexPath) -> T {
        return (dequeueReusableCell(withReuseIdentifier: String(describing: cellType), for: indexPath) as? T)!
    }
}
