const { Pago_servicios, Cuentas, Servicios } = require("../../db");
require("dotenv").config();

async function ServPayment(req, res, next) {
  // nombre del servicio a pagar
  // monto a pagar
  // la cuenta de donde viene la plata
  const { origen, destino, monto, fecha } = req.body;

  try {
    let Account_origen = await Cuentas.findOne({
      where: {
        numerocuenta: origen,
      },
    });

    console.log("Cuenta origen",Account_origen )

    let servicio = await Servicios.findOne({
      where: {
        nombre: destino,
      },
    });

    
    

    // cargar en la bd la lista de servicios y en esta comprobacion mandar un alert con "este servicio no esta disponible en este momento."
    //crear la ruta de get servicios y conectarla al front
    if (!servicio) {
      
       servicio = await Servicios.create({
        monto: monto,
        fecha_vencimiento: fecha,
        nombre: destino,
      });

       servicio = await Servicios.findOne({
        where: {
          nombre: destino,
        },
      });
    }
    /* console.log('servicio',servicio)
    console.log('acc origen', typeof Account_origen.saldo)
    console.log('monto', typeof monto) */

    if (parseInt(Account_origen.saldo) >= parseInt(monto) && parseInt(monto) > 0) {
     
      Account_origen.saldo = parseInt(Account_origen.saldo) - parseInt(monto);
      await Account_origen.save();
      
      servicio.monto = parseInt(servicio.monto) + parseInt(monto);
      await servicio.save();
      console.log("el destino es ", monto)

      let pago = await Pago_servicios.create({
        fecha: fecha,
        servicioId: servicio.id,
        destino:destino,
        cuentaIdcuentas: Account_origen.idcuentas,
        monto:monto,
      });

      return res.send(pago);
    }else res.send(null).status(204)
  } catch (error) {
    next(error);
  }

  // fecha del pago
  //idcuentas para hacer la transf
  // monto para descontar de Cuentas
  //id servicios
}


async function getServicePayment(req, res, next){

  try{
    const id= req.query.id

    if(typeof(id)== "string" && id.length==36 )
    {const payments= await Pago_servicios.findAll({
      where:{
        cuentaIdcuentas:id
      }
    })

    res.send(payments).status(200)
  }else res.send(null).status(204)

  }catch (error) {
    next(error);
}
}


module.exports = { ServPayment, getServicePayment }
