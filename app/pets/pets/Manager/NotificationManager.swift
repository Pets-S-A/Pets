//
//  NotificationManager.swift
//  pets
//
//  Created by Matheus Silva on 25/04/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation
import UIKit
import UserNotifications
extension AppDelegate: UNUserNotificationCenterDelegate {
    //Quando a notificacao é enviada
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                willPresent notification: UNNotification,
                                withCompletionHandler
        completionHandler:
        @escaping (UNNotificationPresentationOptions) -> Void) {
        //Aqui definimos que a notificação deve gerar um alerta com som
        completionHandler([.alert, .sound])
    }
    //Quando a notificacao é respondida
    func userNotificationCenter(_ center: UNUserNotificationCenter,
                                didReceive response: UNNotificationResponse,
                                withCompletionHandler completionHandler: @escaping () -> Void) {
        //Chamando identificador de ações
//        let uuid = response.notification.request.identifier
//        let type = response.notification.request.content.categoryIdentifier

        completionHandler()
    }
    func enviarNotificacao(titulo: String,
                           subtitulo: String,
                           mensagem: String,
                           identificador: String,
                           timeInterval: TimeInterval) {
        //Essa instancia de classe é necessária para criar o corpo da notificação
        let contexto = UNMutableNotificationContent()
        //Criando corpo da notificação
        contexto.title = titulo != "" ? titulo : "Sem título"
        contexto.subtitle = subtitulo
        contexto.body = mensagem
        contexto.sound = .default
        contexto.badge = 1 as NSNumber
        contexto.categoryIdentifier = "pet"
        //Colocando a imgem de fundo
        let imageName = "logo"
        //Aqui verificamos se a mensagem realmente existe, caso ela não exista ele para a função a retornando.
        if let imageURL = Bundle.main.url(forResource: imageName, withExtension: "png") {
            //Anexando a imagem
            do {
                let anexo = try UNNotificationAttachment(identifier: imageName, url: imageURL, options: .none)
                contexto.attachments = [anexo]
            } catch {
                NSLog(error.localizedDescription)
            }
        }
        //Criando a requisição
        let trigger = UNTimeIntervalNotificationTrigger(timeInterval: timeInterval, repeats: false)
        let requisicao = UNNotificationRequest(identifier: identificador, content: contexto, trigger: trigger)
        //Adicionando a requisição ao nosso centro de notificações
        notificationCenter.add(requisicao) { (error) in
            if let error = error {
                NSLog("Deu ruim: \(error.localizedDescription)")
            }
        }
        //Criando os botões de ações
        let done = UNNotificationAction(identifier: "done", title: "Concluir", options: [])
        let categoria = UNNotificationCategory(identifier: identificador,
                                               actions: [done],
                                               intentIdentifiers: [],
                                               options: [])
        //Adicionando as ações ao nosso centro de notificações
        notificationCenter.setNotificationCategories([categoria])
    }
}
