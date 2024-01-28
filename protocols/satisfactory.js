import Epic from './epic.js'

export default class satisfactory extends Epic {
  constructor () {
    super()

    // OAuth2 credentials extracted from Satisfactory files.
    this.clientId = '02612880aa774fb28e3741d3e01501fd'
    this.clientSecret = '7ZP]vm+i.uoetw@RxqRXpod_RNyjPC-%GM#ac~Pc'
    this.deploymentId = '5aebeb30a7614270b4f40c0bc2fe7549'
    this.authByExternalToken = true
  }
}
