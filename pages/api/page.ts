import {db} from '../../lib/db';
import {mailOptions, transporter} from '../../lib/mail';
 
export default async function handler(req:any, res:any){
    await db.collection('concurso2023').doc().set(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            studentemail: req.body.studentemail,
            personalemail: req.body.personalemail,
            category: req.body.category,
        }
    )
    await transporter.sendMail({
        ...mailOptions,
        subject: 'Bienvenido al concurso 2023 del CdD ESFM',
        text: 'Gracias por participar con el Club de Divulgación en su primer concurso. Estaremos esperando tu trabajo, recuerda que tienes toda la información necesaria en nuestra página. ¡Mucho éxito!',
        to: req.body.personalemail,
        html: '<div style="padding:50px; background-color:#1B2A2F; color:white; text-align:center; ">Gracias por participar con el primer concurso del Club de Divulgación ESFM. Estaremos esperando tu trabajo, recuerda que tienes toda la información necesaria en nuestra página. ¡Mucho éxito!</div>'
    })
    console.log('Registro añadido');
    return res.status(200).json({message:'hola mundo'});
}