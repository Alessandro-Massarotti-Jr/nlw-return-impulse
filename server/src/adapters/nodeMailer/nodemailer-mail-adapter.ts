import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5daed3265fbd69",
        pass: "268eb63057c742"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({subject, body}: SendMailData){
      await transport.sendMail({
        from: "equipe Feedget <oi@feedget.com>",
        to: "Alessandro <alemassajr@hotmail.com>",
        subject,
        html: body
    });
   };
}