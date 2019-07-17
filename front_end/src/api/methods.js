import Api from './index'

export default {
  async ask_verify_sig () {
    var date = new Date();
    var a = date.getTime();

    var address = await window.mpurse.getAddress()
    var message = "Please sign this message :" + a
    var signature = await window.mpurse.signMessage(message);

    const item = { address: address, message: message, signature: signature }
    return Api().post('/verify', item)
  }
}

