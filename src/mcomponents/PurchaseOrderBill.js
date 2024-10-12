import React from 'react'
import stl from "../css/PurchaseOrderBill.module.css"

function PurchaseOrderBill() {
    return (
        <>
            <div id={stl.billTemplatePurchase}>
                <table>
                    <caption>

                        <tr>
                            <td>
                                <img src="./assets/billLogo.png" alt="company logo" />
                            </td>
                            <td colSpan="3" style={{ verticalAlign: "middle" }} id={stl.billHading}>
                                <h2 id={stl.billHeader}>Purchase Order</h2>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <p className={stl.secondRowContent}>
                                    Ship & Bill to Address
                                </p>
                                <p className={stl.secondRowContent}>
                                    SurgiSol Heathcare Solutions Pvt Ltd
                                </p>
                                <p className={stl.secondRowContent}>
                                    201 , Prince Complex , above Saini Travels
                                </p>
                                <p className={stl.secondRowContent}>
                                    Chatrapati Square , Nagpur 440015
                                </p>
                            </td>
                            <td>
                                <p className={stl.secondRowContent}>
                                    Purchase From :
                                </p>
                                <p className={stl.secondRowContent}>
                                    Molbio Diagnostic Private
                                    Limited.
                                </p>
                                <p className={stl.secondRowContent}>
                                    Plot No. L-46, Phase II D,
                                    Verna Industrial Estate,
                                    Verna- Goa 403722.
                                </p>
                                <p className={stl.secondRowContent}>
                                    INDIA
                                </p>
                                <p className={stl.secondRowContent}>
                                    +91-832-2783267
                                </p>
                            </td>
                            <td style={{ width: '300px' }}>
                                <p className={stl.secondRowContent}>
                                    SurgiSol Healthcare Solutions Pvt Ltd Company
                                </p>
                                <p className={stl.secondRowContent}>
                                    Registration No : U74999MH2017PTC295731
                                </p>
                                <p className={stl.secondRowContent}>
                                    GSTIN No : 27AAYCS8073L1Z8
                                </p>
                                <p className={stl.secondRowContent}>
                                    TAN No : MUMS91010D
                                </p>
                                <p className={stl.secondRowContent}>
                                    Form 20B : MH-MZ6-226933
                                </p>
                                <p className={stl.secondRowContent}>
                                    Form 21B : MH-M26-226934
                                </p>
                                <p className={stl.secondRowContent}>
                                    Form20D : MH-M26-226935
                                </p>
                                <p className={stl.secondRowContent}>
                                    PAN No : AAYCS8073L
                                </p>
                            </td>
                            <td style={{ width: '200px' }}>
                                <p className={stl.secondRowContent}>
                                    PO ORDER NO:
                                </p>
                                <p className={stl.secondRowContent}>
                                    PO DATE:
                                </p>
                                <p className={stl.secondRowContent}>
                                    Delivery Terms:
                                </p>
                            </td>
                        </tr>
                    </caption>

                    <thead>
                        <tr>
                            <th rowSpan="2">Sr no.</th>
                            <th rowSpan="2">Item code & Dscription</th>
                            <th rowSpan="2">OTY.</th>
                            <th rowSpan="2">Packaging</th>
                            <th rowSpan="2">Unit Rate</th>
                            <th rowSpan="2">Taxeble Total Value(Rs.)</th>
                            <th colSpan="2">GST</th>
                            <th rowSpan="2">Total(Rs.)</th>
                        </tr>
                        <tr>
                            <th>Rate (%)</th>
                            <th>Amount (Rs.)</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default PurchaseOrderBill
