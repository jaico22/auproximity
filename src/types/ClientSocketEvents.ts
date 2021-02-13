enum ClientSocketEvents {
    SetUuid       = "setuuid",
    JoinRoom      = "joinroom",
    Disconnect    = "disconnect",
    Error         = "error",
    SetAllClients = "setallclients",
    AddClient     = "addclient",
    RemoveClient  = "removeclient",
    SetMap        = "setmap",
    SetPose       = "setpose",
    SetGroup      = "setgroup",
    SetHost       = "sethost",
    SetOptions    = "setoptions",
    SetSettings   = "setsettings",
    SetIsImposter = "setisimposter"
}

export default ClientSocketEvents;
