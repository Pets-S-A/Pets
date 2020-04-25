//
//  Notification.swift
//  pets
//
//  Created by Matheus Silva on 25/04/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

struct Notification {
    static func send(titulo: String,
                     subtitulo: String,
                     mensagem: String,
                     identificador: String,
                     type: String,
                     timeInterval: TimeInterval,
                     repeats: Bool) {
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        getAuthorization()
        appDelegate.enviarNotificacao(titulo: titulo,
                                      subtitulo: subtitulo,
                                      mensagem: mensagem,
                                      identificador: identificador,
                                      type: type,
                                      timeInterval: timeInterval,
                                      repeats: repeats)
    }
    static func getAuthorization() {
        guard let appDelegate = UIApplication.shared.delegate as? AppDelegate else { return }
        let options: UNAuthorizationOptions = [.alert, .sound, .badge]
        appDelegate.notificationCenter.requestAuthorization(options: options) { (_ answer, _ error) in
            // Prayer is added
        }
    }
    static func disable() {
        let center = UNUserNotificationCenter.current()
        center.removeAllPendingNotificationRequests()
        center.removeAllDeliveredNotifications()
    }
    static func disable(with id: String) {
        let center = UNUserNotificationCenter.current()
        center.removePendingNotificationRequests(withIdentifiers: [id])
        center.removeDeliveredNotifications(withIdentifiers: [id])
    }
}
