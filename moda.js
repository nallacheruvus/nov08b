/**
 * Constructor function for bank account
 * @param {account id} acid 
 * @param {Bank name} bname 
 * @param {Account holders name} aname 
 * @author satishn
 */
function BankAccount(acid, bname, aname) {
    this.acid = acid;
    this.bname = bname;
    this.aname = aname;
}

module.exports.BankAccount = BankAccount;