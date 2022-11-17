
sap.ui.define([],
    function () {
        "use strict";
        return {
            onInit: function () {
                var sBaseId = this.getView().getId() +"--to_Valores::com.sap.vocabularies.UI.v1.LineItem::action::cds_zui_fi_vf_pagamento.cds_zui_fi_vf_pagamento_Entities::";
                this.getView().byId(sBaseId + "Pagar").setVisible(false);
                this.getView().byId(sBaseId + "BloquearDefinitivamente").setVisible(false);
                this.getView().byId(sBaseId + "Liberar").setVisible(false);
            }
       
    };
    });
