
import "./home.css";
// import Card from 'react-bootstrap/Card';
import whatsapp from "./whatsapp-icon.svg";
import phone from "./phone.svg";
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import { Card } from "react-bootstrap";
import { Col, Text, gray } from "@nextui-org/react";
import { Modal, useModal, Button, Image } from "@nextui-org/react";


function Puja() {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  const [loading, setLoading] = useState(false);

  const [visible1, setVisible1] = React.useState(false);
  const handler1 = () => setVisible1(true);

  const closeHandler1 = () => {
    setVisible1(false);
    console.log("closed");
  };
  const [visible2, setVisible2] = React.useState(false);
  const handler2 = () => setVisible2(true);

  const closeHandler2 = () => {
    setVisible2(false);
    console.log("closed");
  };
  const [visible3, setVisible3] = React.useState(false);
  const handler3 = () => setVisible3(true);

  const closeHandler3 = () => {
    setVisible3(false);
    console.log("closed");
  };
  const [visible4, setVisible4] = React.useState(false);
  const handler4 = () => setVisible4(true);

  const closeHandler4 = () => {
    setVisible4(false);
    console.log("closed");
  };
  const [visible5, setVisible5] = React.useState(false);
  const handler5 = () => setVisible5(true);

  const closeHandler5 = () => {
    setVisible5(false);
    console.log("closed");
  };
  const [visible6, setVisible6] = React.useState(false);
  const handler6 = () => setVisible6(true);

  const closeHandler6 = () => {
    setVisible6(false);
    console.log("closed");
  };
  const [visible7, setVisible7] = React.useState(false);
  const handler7 = () => setVisible7(true);

  const closeHandler7 = () => {
    setVisible7(false);
    console.log("closed");
  };
  const [visible8, setVisible8] = React.useState(false);
  const handler8 = () => setVisible8(true);

  const closeHandler8 = () => {
    setVisible8(false);
    console.log("closed");
  };

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <>
      {loading ?

        <Loader
          // color={'#294a65'}
          loading={loading}
          // cssOverride={override}
          size={300}
        // aria-label="Loading Spinner"
        // data-testid="loader"
        // speedMultiplier={1.5}
        /> :
        <div className=" card_list">
          <div className='title my-5 text-center'>
            <h3 style={{ color: "#fa4c02", fontWeight: "bold" }}> <u> पूजा सूची: संपर्क करने के लिए पूजा सेवाओं की सूची देखें </u></h3>
          </div>


          <div className='card_group'>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/nr0W7R8w/mahakaleshwar-1.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}>रूद्राभिषेक</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>"रूद्राभिषेक पूजा: देवगणों के रुद्र स्वरूप भगवान शिव को अभिषिंचन एवं आराधना का पवित्र अनुष्ठान।"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler2} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible2}
                    onClose={closeHandler2}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/v86pVpWV/mahakaleshwar.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> रूद्राभिषेक</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>अभिषेक का मतलब होता है – स्नान करना या कराना। यह स्नान भगवान शंकर को उनकी प्रसन्नता हेतु जल एवं रूद्र-मंत्रों के साथ करवाया जाता है इसको रूद्राभिषेक कहते हैं। जल की धारा शिवजी को अति प्रिय है। साधारण रूप से अभिषेक या तो जल या गंगाजल से होता है परंतु विशेष अवसर एवं विशेष प्रयोजन हेतु दूध, दही, घी, शकर, शहद, पंचामृत आदि वस्तुओं से किया जाता है।
                              <br />
                            </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>
                                शिव को रूद्र इसलिए कहा जाता है – ये रूत् अर्थात् दुख को नष्ट कर देते है। आसुतोष भगवान सदाशिव की उपासना में रूद्राभिषेक का विशेष माहात्म्य है। वेद के ब्राहमण-ग्रन्थों में, उपनिषदों मंे, स्मृतियों में और पुराणों में रूद्राभिषेक के पाठ, जप आदि कि विशेष महिमा का वर्णन है। रूद्राध्याय के समान जपनेयाग्य, स्वाध्याय करनेयोग्य वेदों और स्मृतियों आदि में अन्य कोई मंत्र नहीं है। इस ग्रन्थ में ब्रह्म के निर्गुण एवं सगुण दोनों रूपों का वर्णन है। मन, कर्म तथा वाणी से परम पवित्र तथा सभी प्रकार की आसक्तियों से रहित होकर भगवान सदाशिव की प्रसन्नता के लिए रूद्राभिषेक करना चाहिए। मनुष्य का मन विषयलोलुप हाकर अधोगति को प्राप्त न हो और व्यक्ति अपनी चित्तवृत्तियों को स्वच्छ रख सके इसके निमित्त रूद्रका अनुष्ठान करना मुख्य साधन है। यह रूद्रनुष्ठान प्रवृत्ति-मार्ग से निवृत्ति मार्ग को प्राप्त कराने में समर्थ है। इसके जप, पाठ से तथा अभिषेक आदि साधनों से भगवद्भक्ति, शान्ति, पुत्र-पौत्रादी की वृद्धि, धन-धान्य की संपन्नता, तथा स्वास्थ्य की प्राप्ति होती है। वहीं परलोक मंे सद्गति एवं परमपद (मोक्ष) भी प्राप्त होता है। रूद्राभिषेक परम पवित्र तथा धन, यश, और आयु की वृद्धि करनेवाला है। अपने कल्याण के लिए भगवान सदाशिव की प्रसन्नता के लिए निष्कामभाव से यजन करना चाहिए, इसका अनंत फल होता है। सब प्रकार की सि़िद्ध के लिए रूद्राभिषेक करने से समस्त कामनाओं की पूर्ति होती है।
                                <br />  <br />
                                <h3> रूद्राभिषेक करवाने से लाभ</h3>
                                <br />
                                <ul>
                                  <li>भगवान शिवजी कि प्रसन्नता के लिए रूद्राभिषेक करवाना चाहिए।</li>
                                  <li>इससे अमाप पुण्यों की प्राप्ति होती हैं एवं पापों का नाश होता है।</li>
                                  <li>रूद्राभिषेक से भगवान शिवकी कृपा से सभी कामनाओं की पूर्ति होती है।</li>
                                  <li>रूद्राभिषेक करने वाला परा मुक्ति, सायुज्य मुक्ति, विशुद्ध मुक्ति, कैवल्य पद, परम गति को प्राप्त करता है।</li>
                                  <li>जो रोगी और पापी रूद्राभिषेक करता है वह रोग और पाप से मुक्त होकर सुख को प्राप्त करता है।</li>
                                  <li>रूद्राभिषेक करने से उपद्रवों की शांति होती है।</li>
                                  <li>रूद्राभिषेक करवाने से जीवन आनंद एवं शांतिपूर्ण व्यतीत होता है एवं दीर्घजीवन की प्राप्ति होती है।</li>
                                  <li>इसके करवाने से संर्पूर्ण मनोरथ पूर्ण होते है।</li>
                                  <li>यह कल्मशों का नाशक, सब पापों का निवारक तथा सब प्रकार के दुखों और भयों को दूर करनेवाला है।</li>
                                  <li>इसके करवाने से व्यक्ति सुरापान के दोष से छूट जाता है।</li>
                                  <li>रूद्राभिषेक करवाने से व्यक्ति ब्रहमहत्या के दोष से मुक्त हो जाता है।</li>
                                  <li>इसके करवाने से व्यक्ति स्वर्ण की चोरी के पाप से छुट जाता है।</li>
                                  <li>रूद्राभिषेक के प्रभाव से व्यक्ति शुभाशुभ कर्मो से उद्धार पाता है एवं वह भगवान शिवजी के आश्रित हो जाता है।</li>
                                  <li>इससे ज्ञान की प्राप्ति होती है एवं व्यक्ति भवसागर से पार हो जाता है।</li>
                                  <li>आकस्मीक संकट की स्थिति में रूद्राभिषेक करवाने से शिवजी की कृपा से भयंकर स्थिति भी टल जाती है।</li>
                                </ul>
                                <h2> विभिन्न द्रव्यों से अभिषेक करने पर लाभ</h2>
                                <br />
                                जल की धारा शिवजी को अति प्रिय है। भगवान शिवजी को प्रसन्न करने हेतु रूद्राभिषेक विभिन्न द्रव्यों जैसे – दूध, दही, घी, शहद, पंचामृत, सरसों, शकर, गन्ने के रस आदि से किया जाता है। इन द्रव्यों के द्वारा अभिषेक करने पर जो लाभ होते हैं वे निम्नलिखित है:-
                                <ul>  <li>  जल से अभिषेक करने पर:- जल से अभिषेक करने पर वर्षा होती है।</li>
                                  <li>  तीर्था के जल से अभिषेक करने पर:-तीर्थाें के जल से अभिषेक करने पर मोक्ष की प्राप्ति होती है। ज्वर को शांत करने के लिए जल की धार से अभिषेक करना चाहिए।</li>
                                  <li>  दूध से अभिषेक करने पर:- दूध से अभिषेक करने पर पुत्र की प्राप्ति होती है। प्रमेह रोग का नाश होता है। मनोभिलाषित कामना की पूर्ति होती है।</li>
                                  <li>  शक्कर से मिले दूध से अभिषेक करने पर:-शक्कर से मिले दूध से अभिषेक करने पर बुद्धि की जडता का नाश होता है एवं बुद्धि श्रेष्ठ होती है।</li>
                                  <li>  गोदुग्ध द्वारा अभिषेक करने पर:-गोदुग्ध द्वारा अभिषेक करने पर वन्ध्या को पुत्र की प्राप्ति होती है, एवं जिसकी संतान होकर मर जाती हैं उसकी संतान की रक्षा होती है। मनुष्य को दीर्घ आयु की प्राप्ति होती है।</li>
                                  <li>  दही से अभिषेक करने पर:-दही से अभिषेक करने पर पशुओं की प्राप्ति होती है।</li>
                                  <li>  घी से अभिषेक करने पर:-घी से अभिषेक करने पर वंश का विस्तार होता है। इससे आरोग्य की प्राप्ति भी होती है।</li>
                                  <li>  शहद के द्वारा अभिषेक करने पर:-शहद के द्वारा अभिषेक करने पर पापों का नाश होता है। तपेदिक आदि रोग भी दूर हो जातें है।</li>
                                  <li>  शहद एवं धी से अभिषेक करने पर:-शहद एवं धी से अभिषेक करने पर धन की प्राप्ति होती है।</li>
                                  <li>  गन्ने के रस से अभिषेक करने पर:-गन्ने के रस से अभिषेक करने पर लक्ष्मी की प्राप्ति होती है।</li>
                                  <li>  कुशोदक से अभिषेक करने पर:-कुशोदक से अभिषेक करने पर व्याधि की शांति होती है। इससे उपद्रवों कि शांति भी होती है।</li>
                                  <li>  सरसों के तेल से अभिषेक करने पर:-सरसों के तेल से अभिषेक करने पर शत्रुका विनाश होता है।</li>
                                </ul>  उपर्युक्त द्रव्यों से अभिषेक करने पर भगवान शिव अत्यंत प्रसन्न होकर भक्तों की मनोकामनाओं को पूर्ण करते है, एवं भक्तों के संकटों का नाश करते है। अतः विधि-विधान से खूब श्रद्धा एवं विश्वास के साथ रूद्राभिषेक करना चाहिए।
                              </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/tgbx31vx/kaalsarp.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}>कालसर्प दोष शांति</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>"रूद्राभिषेक पूजा: देवगणों के रुद्र स्वरूप भगवान शिव को अभिषिंचन एवं आराधना का पवित्र अनुष्ठान।"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler1} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible1}
                    onClose={closeHandler1}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/tgbx31vx/kaalsarp.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> कालसर्प दोष शांति</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>आपकी कुण्डली में कालसर्प योग है इस बात का पता कुण्डली में ग्रहों की स्थिति को देखकर पता चलता है लेकिन कई बार जन्म समय एवं तिथि का सही ज्ञान नहीं होने पर कुण्डली ग़लत हो जाती है. इस तरह की स्थिति होने पर कालसर्प योग आपकी कुण्डली में है या नहीं इसका पता कुछ विशेष लक्षणो से जाना जा सकता है.  <br />
                            </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>
                                <h2>     कालसर्प के लक्षण</h2>
                                <p style={{ "fontWeight": 600 }}>
                                  कालसर्प योग से पीड़ित होने पर स्वप्न में मरे हुए लोग आते हैं. मृतकों में अधिकांशत परिवार के ही लोग होते हैं. इस योग से प्रभावित व्यक्ति को सपने में अपने घर पर परछाई दिखाई देती है. व्यक्ति को ऐसा लगता है मानो कोई उसका शरीर और गला दबा रहा है. सपने में नदी, तालाब, समुद्र आदि दिखाई देना भी कालसर्प योग से पीड़ित होने के लक्षण हैं.
                                  ज्योतिषशास्त्र के अनुसार इस योग से प्रभावित व्यक्ति समाज एवं परिवार के प्रति समर्पित होता है वे अपनी निजी इच्छा को प्रकट नहीं करते और न ही उन्हें अपने सुख से अधिक मतलब होता है. इनका जीवन संघर्ष से भरा होता है. बीमारी या कष्ट की स्थिति में अकेलापन महसूस होना और जीवन बेकार लगना ये सभी इस योग के लक्षण हैं.
                                  इस प्रकार की स्थिति का सामना अगर आपको करना पड़ रहा है तो संभव है कि आप इस योग से पीड़ित हैं. इस योग की पीड़ा को कम करने के लिए इसका उपचार कराएं.
                                </p>
                                <h2>कालसर्प योग</h2>
                                <p style={{ "fontWeight": 600 }}>
                                  कर्म फल की बात सभी शास्त्र और धर्म में बताया गया है. हम जैसा कर्म करते है उसी के अनुरूप हमें फल मिलता है. कालसर्प योग के पीछे भी यही मान्यता और धारणा है. मान्यताओं के अनुसार कालसर्प योग उस व्यक्ति की कुण्डली में बनता है जिसने पूर्व जन्म में सांप को मारा हो या किसी बेकसुर जीव को इतना सताया हो कि उसकी मृत्यु हो गयी हो. इसके अलावा यह भी माना जाता है कि जब व्यक्ति की प्रबल इच्छा अधूरी रह जाती है तब व्यक्ति अपनी इच्छाओं को पूरा करने के लिए पुनर्जन्म लेता है और ऐसे व्यक्ति को भी इस योग का सामना करना होता है.
                                </p>
                                <h2> कालसर्प योग शांति </h2>
                                <p style={{ "fontWeight": 600 }}>
                                  कालसर्प योग के अनिष्टकारी प्रभाव से बचने के लिए शास्त्रो में जो उपाय बताए गये हैं उनके अनुसार प्रतिदिन पंचाक्षरी मंत्र “ऊँ नम शिवाय अथवा महामृत्युंजय मंत्र का 108 जप करना चाहिए. काले अकीक की माला से राहु ग्रह का बीज मंत्र 108 बार जप करना चाहिए. शनिवार के दिन पीपल की जड़ को जल से सिंचना चाहिए. नागपंचमी के दिन व्रत रखकर नाग देव की पूजा करनी चाहिए. मोरपंखधारी भगवान श्री कृष्ण की पूजा करनी चाहिए. शनिवार या पंचमी तिथि के दिन 11 नारियल बहते जल में प्रवाहित करने चाहिए. धातु से बने 108 नाग नागिन के जोड़े बहते जल में प्रवाहित करने चाहिए. सोमवार के दिन किसी विद्वान पंडित से रूद्राभिषेक कराना चाहिए. कालसर्प गायत्री मंत्र का जप करना चाहिए. इन उपायों से काल सर्प और सर्प योग के अनिष्टकारी प्रभाव में कमी आती है और जीवन में इनके कारण आने वाले अवरोधों का सामना नहीं करना होता है.
                                </p>
                                जो व्यक्ति कालसर्प योग में होते हैं वे सांप से भयभीत रहते हैं. इन्हें सांप काटने का डर लगा रहता है. सपने में शरीर पर सांप लिपटा होना दिखाई देना या सांप का सपना आना यह भी इस योग के लक्षण हैं. ऊँचाई पर जाने पर अनजाना भय सताना, घबराहट और बेचैनी होना तथा सुनसान स्थानों पर जाने से मन में भय आना कालसर्प का लक्षण माना जाता है.      </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/SR3NQ5zh/magal-1.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}> मंगल ग्रह</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "मंगल ग्रह पूजा में आदित्यं सूर्यं संरक्षेत्।
                  <br /> विघ्नहर्ता गणेशं प्रणमेत्।
                  <br /> सौम्यं सुमङ्गलं कुरु सर्वदा॥"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler3} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible3}
                    onClose={closeHandler3}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/SR3NQ5zh/magal-1.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> मंगल ग्रह</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>
                              नवग्रह में सूर्य के पश्चात् सर्वाधिक महत्तवपूर्ण ग्रह है मंगल। मंगल जातक की जन्मकुंडली के विविध खानों में विराजमान होता है। यह ग्रह जन्मकुंडली के भिन्न-भिन्न खानों में विराजमान होने से उसका फल भी भिन्न-भिन्न होता है। यदि मंगल जातक की जन्मकुंडली में विराजमान है और जातक के लिए अशुभ है तो जातक के जीवन में अशुभ परिणाम भी निर्मित करता है। मंगल ग्रह प्रतिकूल होने पर जातक को परिणामस्वरूप अनेक प्रकार कि विध्न-बाधाएं, परेशानीयांे का सामना करना पडता है। अतः तब मंगल की शांति कराना अनिवार्य हो जाता है। यदि समय पर उसकी शांति के उपाय या उसके लिए भातपूजन आदि न करवाये जाए तो उससे जातक को भयंकर परिणाम भी प्राप्त होेते है। <br />
                            </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>
                                <h2>     कालसर्प के लक्षण</h2>
                                मंगल ग्रह से होने वाली हानिया
                                यदि मंगल ग्रह जातक कि जन्मकुंडली में विराजमान है एवं प्रतिकूल या अशुभ प्रभाव डाल रहा है, तो जातक को अनेक प्रकार कि समस्याओं को सामना करना पडता है।
                                <p style={{ "fontWeight": 600 }}>
                                  <ul>
                                    <li>विवाहित, दंपत्य जीवन में अशांति, क्लेश, मनमुटाव आदि हमेशा बना रहता है।</li>
                                    <li>मंगल के अशुभ होने के कारण जातक की मृत्यु भी हो सकती है।</li>
                                    <li>मंगल की अशुभता के कारण जातक स्वयं अपने हाथों से अपना कार्य बिगाड लेता है।</li>
                                    <li>जातक के कार्य बनते-बनते बिगड जाते है।</li>
                                    <li>जातक को धन प्राप्ति में विध्न-बाधाएं आती हैं एवं जातक को ऋण से भी जल्दी छूटकारा नहीं मिलता।</li>
                                    <li>जातक को संतान प्राप्ति में विलंब होता है अथवा संतान प्राप्ति नहीं भी होती है।</li>
                                    <li>जातक कभी-कभी अत्यधिक क्रोधि हो जाता है।</li>
                                    <li>जातक के जीवन में मंगल अनेक प्रकार की परेशानीयां उत्पन्न करता है।</li>
                                    <li>जातक को विद्या प्राप्ति में अनेक प्रकार की समस्याओं का सामना करना पडता है, अथवा कभी-कभी विद्या भी अधूरी रह जाती है।</li>
                                    <li>जातक को जीवन में अधिक परिश्रम करना पडता है फिर भी सफलता बहुत ही कम मिल पाती है।</li>
                                    <li>जातक को मित्रों, संबंधियों आदि से धोखा मिलता है।</li>
                                    <li>जातक कितना भी अच्छा काम कर ले परंतु उसको यश की प्राप्ति नहीं होती। ईमानदार होते हुए भी बदनामी प्राप्त होती है।</li>
                                  </ul>
                                </p>
                                <h2> मंगल ग्रह की शांति के हेतु पूजन</h2>
                                <p style={{ "fontWeight": 600 }}>   मंगल ग्रह की शांति हेतु भातपूजन किया जाता है, जिसे विधि-विधान एवं मंत्रोंच्चार द्वारा संपन्न किया जाता है। इस प्रकार पूजन होने के पश्चात् मंगल की शांति होती है एवं जातक के जीवन में जो भी परेशानीयां, समस्याएं, संकट आदि आते रहते थे वे सभी दूर होने लगते है। जातक उन्नति करने लगता है। जातक को धन की प्राप्ति में जो भी बाधाएं आ रही थी वो सभी दूर हो जाती है। ऋणों से मुक्ति मिलती है। अकाल मृत्यु आदि का भय समाप्त हो जाता है।
                                </p>
                                <h2>मंगल ग्रह की शांति से समस्याओं का समाधान</h2>
                                <p style={{ "fontWeight": 600 }}>  जीवन में यदि समस्याएं आती है तो वे मृत्यु का भय, अनहोनी की आशंका, दुर्घटना की संभावना, धन की हानि, अपयश की प्राप्ति, दुख-दरिद्रता, कष्ट-पीडाएं, गृह में क्लेश, मन में अशांति, निराशा, क्रोध, आत्महत्या के विचार, आदि चीजें भी साथ में लेकर आती है जिससे धन की हानि भी अवश्य होती हैं, अतः थोडा धन पूजन-पाठ, मंत्रजाप आदि में खर्च कर दिया जाए और उससे समस्या का समाधान होता है तो फिर धन के व्यय के बारे में एक क्षण भी विचार नहीं करना चाहिए क्यांेकि समस्याओं के छुटकारे से बढकर धन कभी नहीं होता।
                                </p>
                                <p style={{ "fontWeight": 600 }}>   मंगल की शांति का पूजन विधि-विधान से होता है। इसके पूजन में अनेक प्रकार की सावधानियां, नियम-संयम का ध्यान रखा जाता है। अगर उन बातों का ध्यान नहीं रखा जाए एवं पूजा-पाठ करा दि जाए तो उसके पूजन का संपूर्ण लाभ जातक को प्राप्त नहीं होता एवं उसकी समस्याएं ज्यों की त्यों बनी रहती है इन सभी बातों का ध्यान पंडिजी द्वारा रखकर पूजन करवाया जाता है जिससे जातक को पूर्ण लाभ हो सके एवं इस मंगल की शांति हो सके तथा जातक की समस्याओं का निवारण हो सके।  </p>   </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/FFgNzD2m/kaamnapurti.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}> कामना पूर्ति अनुष्ठान</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "सर्वेभ्यः सुखिनो भवन्तु।
                  <br />विद्वत्सञ्चयाय चरणौ वन्दे।
                  <br />  कामना पूर्त्यर्थं अनुष्ठानं कुरुमः।।"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler4} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible4}
                    onClose={closeHandler4}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/FFgNzD2m/kaamnapurti.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> कामना पूर्ति अनुष्ठान</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>
                              <ul><li>
                                कामना पूर्ति अनुष्ठान (अथर्व/यजुर्वेद): निश्चित उत्पाद के लिये, प्रोजेक्ट की सफलता उसकी समय सिमा को ध्यान में रखते हुए जो भी उपलब्ध हो।
                              </li></ul>              </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>

                                <ul>
                                  <li>
                                    चारों वेदों के मंत्रों द्वारा विभिन्न प्रकार की ४९ कामनाओं की पूर्ति ( सिद्धि ) के लिए प्रयोग में आने वाले मंत्रो व सूक्तों का प्रयोग विधि द्वारा अनुष्ठान ।
                                  </li>
                                  <li>
                                    वेद मंत्रो द्वारा १३ रोगों का उपचार प्रयोग विधि सहित सूर्योपस्थान , ब्रहद्शान्ति तथा जलावसेचन, वैदिक देवताओं की परिचय एवं परस्पर एकत्व की निरूपण, सभी देवताओं की विस्तृत वैदिक पूजन ।
                                  </li>
                                  <li>
                                    कामनापूर्ति संबन्धी विषय जैसे – पति प्राप्ति , पत्नी प्राप्ति , पुत्र प्राप्ति , विद्या प्राप्ति , आरोग्य प्राप्ति , दीर्धायु प्राप्ति , परीक्षा में सफलता , बंधन मुक्ति , गर्भ प्राप्ति , गर्भ दोष निवारण , लक्ष्मी प्राप्ति , व्यापार हानि निवारण , पारिवारिक द्वेष की शान्ति , वैर भाव शान्ति , पति पत्नी वैमनस्य निवारण , शत्रु बाधा निवारण , स्त्री सौभाग्य वृद्धि , ऋणमुक्ति , दुव्यर्सन से मुक्ति , ऐश्वर्य प्राप्ति , सर्वकामना पूर्ति तथा रोगों में – असाध्य रोग , बालरोग , नेत्र रोग , खांसी , गण्डमाला , पीलिया , गुल्म , गठिया , कुष्ठ , ज्वर , उन्माद , मिर्गी तथा आनुवांशिक रोग आदि कुछ अन्य विषयों पर कुल १२२ प्रयोगों का वर्णन ।
                                  </li>
                                </ul>

                              </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/kXBWN1W3/kumbh-1.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}> कुम्भ/अर्क विवाह</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "कुम्भ/अर्क विवाह पूजा एक पवित्र अनुष्ठान है, जिसमें दो प्राकृतिक तत्वों के आदर्श संयोग के लिए ईश्वरीय आशीर्वाद लिया जाता है।"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler5} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible5}
                    onClose={closeHandler5}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/Rh0ZBYvM/kumbh.jpg
                        "
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> कुम्भ/अर्क विवाह</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>

                              मंगलदोष एक प्रमुख दोष माना जाता रहा है हमारे कुंडली के दोषों में, आजकलके शादी-ब्याह में इसकी प्रमुखता देखि जा रही है पर इस दोष के बहुत सारे परिहार भी है. ऐसा माना जाता रहा है की मांगलिक दोषयुक्त कुंडली का मिलान मांगलिक-दोषयुक्त कुंडली से ही बैठना चाहिए या ऐसे कहना चाहिए की मांगलिक वर की शादी मांगलिक वधु से होनी चाहिए पर ये कुछ मायनो में गलत है कई बार ऐसा करने से ये दोष दुगना हो जाता है जिसके फलस्वरूप वर-वधु का जीवन कष्टमय हो जाता है.
                            </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>

                                अत्तः यहाँ कुछ बातें ध्यान देने योग्य हो जाती है जैसे की अगर वर-वधु की उमर अगर ३० वर्ष से अधिक हो या जिस स्थान पर वर या वधु का मंगल स्थित हो उसी स्थान पर दुसरे के कुंडली में शनि-राहु-केतु या सूर्य हो तो भी मंगल-दोष विचारनीय नहीं रह जाता अगर दूसरी कुंडली मंगल-दोषयुक्त न भी हो तो. या वर-वधु के गुण-मिलान में गुंणों की संख्या ३० से उपर आती है तो भी मंगल-दोष विचारनीय नहीं रह जाता. ये तो थी परिहार की बात इसके अलावा अगर ये स्थिति भी न हो अर्थात कुंडली के योगों के द्वारा अगर परिहार संभव न हो तो इसके कुछ उपाए है जिसके की करने के बाद मंगल-दोष को बहुत हद तक कम किया जा सकता है. जैसे की कुम्भ-विवाह विष्णु-विवाह और अश्वाथा-विवाह. अर्थात अगर ऐसे जातको के विवाह से पहले जिसमे किसी एक की कुंडली जो की मांगलिक दोषयुक्त हो उसका विवाह इन पद्धतियों में से किसी एक से कर के पुनः फिर उसका विवाह गैर-मांगलिक दोषयुक्त कुंडली वाले के साथ किया जा सकता है. कुम्भ-विवाह में वर या वधु की शादी एक घड़े के साथ कर दी जाती है और उसके पश्चात उस घड़े को तोड़ दिया जाता है. उसी प्रकार अश्वाथा-विवाह में में वर या वधु की शादी एक केले के पेड़ के साथ कर दी जाती है और उसके पश्चात उस पेड़ को काट दिय जाता है.विष्णु-विवाह में वधु की शादी विष्णु-जी की प्रतिमा से की जाती है. फिर उसका विवाह जिस वर से उसकी शादी तय हो उससे कर देनी चाहिए.
                                <br />
                                इसके अलावा और भी कुछ बातें ध्यान देने योग्य है जैसे की अगर वर-वधु दोनों की कुण्डलियाँ मांगलिक- दोषयुक्त हो पर किसी एक का मंगल उ़च्च का और दुसरे का नीच का हो तो भी विवाह नहीं होना चाहिए या दोनों की कुण्डलियाँ मांगलिक- दोषयुक्त न हो पर किसी एक का मंगल 29 डिग्री से ० डिग्री के बीच का हो तो भी मंगल-दोष बहुत हद्द तक प्रभावहीन हो जाता है अतः मेरे विचार से विवाह के समय इन बातों को विचार में रख के हम आने वाले भविष्य को सुखमय बना सकते है.

                              </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/Y9DJ4r5m/pitra-1.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}>पितृदोष शांति पूजन</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "कुम्भ/अर्क विवाह पूजा एक पवित्र अनुष्ठान है, जिसमें दो प्राकृतिक तत्वों के आदर्श संयोग के लिए ईश्वरीय आशीर्वाद लिया जाता है।"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler6} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible6}
                    onClose={closeHandler6}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/SsXpfY7G/pitra-2.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> पितृदोष शांति पूजन</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>
                              <h2>पितृदोष किसे कहते है ?</h2>
                              हमारे पूर्वज, पितर जो कि अनेक प्रकार की कष्टकारक योनियों में अतृप्ति, अशांति, असंतुष्टि का अनुभव करते हैं एवं उनकी सद्गति या मोक्ष किसी कारणवश नहीं हो पाता तो हमसे वे आशा करते हैं कि हम उनकी सद्गति या मोक्ष का कोई साधन या उपाय करें जिससे उनका अगला जन्म हो सके एवं उनकी सद्गति या मोक्ष हो सके। उनकी भटकती हुई आत्मा को संतानों से अनेक आशाएं होती हैं एवं यदि उनकी उन आशाओं को पूर्ण किया जाए तो वे आशिर्वाद देते हैं। यदि पितर असंतुष्ट रहे तो संतान की कुण्डली दूषित हो जाती है एवं वे अनेक प्रकार के कष्ट, परेशानीयां उत्पन्न करते है, फलस्वरूप कष्टों तथा र्दुभाग्यों का सामना करना पडता है।      </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>

                                <h2>पितृदोष से होने वाली हानिया</h2>
                                <p style={{ "fontWeight": 600 }}>
                                  यदि किसी जातक की कुंडली मे पित्रृदोष होता है तो उसे अनेक प्रकार की परेशानियां, हानियां उठानी पडती है। जो लोग अपने पितरों के लिए तर्पण एवं श्राद्ध नहीं करते, उन्हे राक्षस, भूत-प्रेत, पिशाच, डाकिनी-शाकिनी, ब्रहमराक्षस आदि विभिन्न प्रकार से पीडित करते रहते है।
                                </p>
                                <ul>
                                  <li>घर में कलह, अशांति रहती है।</li>
                                  <li>रोग-पीडाएं पीछा नहीं छोडती है।</li>
                                  <li>घर में आपसी मतभेद बने रहते है।</li>
                                  <li>कार्यों में अनेक प्रकार की बाधाएं उत्पन्न हो जाती है।</li>
                                  <li>अकाल मृत्यु का भय बना रहता है।</li>
                                  <li>संकट, अनहोनीयां, अमंगल की आशंका बनी रहती है।</li>
                                  <li>संतान की प्राप्ति में विलंब होता है।</li>
                                  <li>घर में धन का अभाव भी रहता है।</li>
                                  <li>अनेक प्रकार के महादुखों का सामना करना पडता है।</li>
                                </ul>
                                <h2>   पितृदोष के लक्षण</h2>
                                <ul>
                                  <li> घर में आय की अपेक्षा खर्च बहुत अधिक होता है।</li>
                                  <li> घर में लोगों के विचार नहीं मिल पाते जिसके कारण घर में झगडे होते रहते है।</li>
                                  <li> अच्छी आय होने पर भी घर में बरकत नहीं होती जिसके कारण धन एकत्रित नहीं हो पाता।</li>
                                  <li> संतान के विवाह में काफी परेशानीयां और विलंब होता है।</li>
                                  <li> शुभ तथा मांगलीक कार्यों में काफी दिक्कते उठानी पडती है।</li>
                                  <li> अथक परिश्रम के बाद भी थोडा-बहुत फल मिलता है।</li>
                                  <li> बने-बनाए काम को बिगडते देर नहीं लगती।</li>
                                </ul>
                                <h2>    पित्रुओं की शांति, तर्पण आदि न करने से पाप</h2>

                                <p style={{ "fontWeight": 600 }}> पित्रुओं की शांति एवं तर्पण आदि न करने वाले मानव के शरीर का रक्तपान पित्रृगण करते हैं अर्थात् तर्पण न करने के कारण पाप से शरीर का रक्त शोषण होता है।
                                </p>
                                <ul>
                                  <li> पितृदोष की शांति हेतु त्रिपिण्डी श्राद्ध, नारायण बलि कर्म, महामृत्युंजय मंत्र</li>
                                  <li> त्रिपिण्डी श्राद्ध यदि किसी मृतात्मा को लगातार तीन वर्षों तक श्राद्ध नहीं किया जाए तो वह जीवात्मा प्रेत योनि में चली जाती है। ऐसी प्रेतात्माओं की शांति के लिए त्रिपिण्डी श्राद्ध कराया जाता है।</li>
                                  <li> नारायण बलि कर्म यदि किसी जातक की कुण्डली में पित्रृदोष है एवं परिवार मे किसी की असामयिक या अकाल मृत्यु हुई हो तो वह जीवात्मा प्रेत योनी में चला जाता है एवं परिवार में अशांति का वातावरण उत्पन्न करता है। ऐसी स्थिति में नारायण बलि कर्म कराना आवश्यक हो जाता है।</li>
                                  <li> महामृत्युंजय मंत्र महामृत्युंजय मंत्र जाप एक अचूक उपाय है। मृतात्मा की शांति के लिए भी महामृत्युंजय मंत्र जाप करवाया जा सकता है। इसके प्रभाव से पूर्व जन्मों के सभी पाप नष्ट भी हो जाते है।</li>
                                </ul>
                                <h2> पितृदोष की शांति हेतु सरल उपाय</h2>
                                <ul>
                                  <li>    घर में कभी-कभी गीता पाठ करवाते रहना चाहिए।</li>
                                  <li>  प्रत्येक अमावस्या को ब्राहमण भोजन अवश्य करवायें।</li>
                                  <li>  ब्राहमण भोजन में पूर्वजों की मनपसंद खाने की वस्तुएं अवश्य बनायी जाए।</li>
                                  <li>  ब्राहमण भोजन में खीर अवश्य बनाए।</li>
                                  <li>  योग्य एवं पवित्र ब्राहमण को श्राद्ध में चांदी के पात्र में भोजन करवायें।</li>
                                  <li>  स्वर्ण दक्षिणा सहित दान करने से अति उत्तम फल की प्राप्ति होती है।</li>
                                  <li>  पित्रृदोष की शांति करने पर सभी परेशानीयां अपने-आप समाप्त होने लगती है। मानव सफल, सुखी एवं ऐश्वर्यपूर्ण जीवन व्यतीत करता है।</li>
                                </ul>
                              </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/9XsJM88M/nagnagbali-2.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}>नागवली/नारायणवली पूजन</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "नागवली/नारायणवली पूजनं नागराजाय विधिवत्।
                  <br /> पापानां नाशाय चैव वृष्ट्या वर्षति शान्तये॥"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler7} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible7}
                    onClose={closeHandler7}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/jjYXXD0r/nagnagbali.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> नागवली/नारायणवली पूजन</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>
                              नारायण नागबलि ये दोनो विधी मानव की अपूर्ण इच्छा , कामना पूर्ण करने के उद्देश से किय जाते है इसीलिए ये दोने विधी काम्यू कहलाते है। नारायणबलि और नागबपलि ये अलग-अलग विधीयां है। नारायण बलि का उद्देश मुखत: पितृदोष निवारण करना है । और नागबलि का उद्देश सर्प/साप/नाग हत्याह का दोष निवारण करना है।     </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>
                                <ul>
                                  <li>नारायण नागबलि ये दोनो विधी मानव की अपूर्ण इच्छा , कामना पूर्ण करने के उद्देश से किय जाते है इसीलिए ये दोने विधी काम्यू कहलाते है। नारायणबलि और नागबपलि ये अलग-अलग विधीयां है। नारायण बलि का उद्देश मुखत: पितृदोष निवारण करना है । और नागबलि का उद्देश सर्प/साप/नाग हत्याह का दोष निवारण करना है। केवल नारायण बलि यां नागबलि कर नहीं सकतें, इसलिए ये दोनो विधीयां एकसाथ ही करनी पडती हैं।</li>
                                  <li>पितृदोष निवारण के लिए नारायण नागबलि कर्म करने के लिये शास्त्रों मे निर्देशित किया गया है । प्राय: यह कर्म जातक के दुर्भाग्य संबधी दोषों से मुक्ति दिलाने के लिए किये जाते है। ये कर्म किस प्रकार व कौन इन्हें कर सकता है, इसकी पूर्ण जानकारी होना अति आवश्‍यक है। ये कर्म जिन जातकों के माता पिता जिवित हैं वे भी ये कर्म विधिवत सम्पन्न कर सकते है। यज्ञोपवीत धारण करने के बाद कुंवारा ब्राह्मण यह कर्म सम्पन्न करा सकता है।</li>
                                  <li>संतान प्राप्‍ती एवं वंशवृध्दि के लिए ये कर्म सपत्‍नीक करने चाहीए। यदि पत्‍नी जीवित न हो तो कुल के उध्‍दार के लिए पत्‍नी के बिना भी ये कर्म किये जा सकते है । यदि पत्‍नी गर्भवती हो तो गर्भ धारण से पाचवे महीनेतक यह कर्म किया जा सकता है। घर मे कोई भी मांगलिक कार्य हो तो ये कर्म एक साल तक नही किये जाते है । माता या पिता की मृत्यु् होने पर भी एक साल तक ये कर्म करने निषिध्द माने गये है।</li>
                                </ul>                </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>
            <div style={{ width: '20rem', "overflow": "hidden", "borderRadius": "0.5rem", "background": "linear-gradient(rgb(153, 27, 27),rgb(202, 138, 4),rgb(234, 179, 8))", "boxShadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
              <div style={{ "padding": "1rem", "height": "20rem", backgroundSize: "cover", backgroundImage: "url('https://i.postimg.cc/tC6c3ZY9/mahamrityunjaypuja-1.jpg')" }}></div>
              <div className="p-4 card_content ">
                <h1 style={{ "fontSize": "1.25rem", "lineHeight": "1.75rem", "fontWeight": 700, color: "black" }}>महामृत्युंजय मंत्र अनुष्‍ठान</h1>
                <p style={{ "marginTop": ["0.5rem", "0.5rem"], "marginBottom": "0.5rem", color: "black" }}>
                  "महामृत्युंजय मंत्रस्य अनुष्ठानम्।
                  <br /> सर्वारोगनिवृत्तिदायकः।
                  <br /> आरोग्यं सुखं च समृद्धिं च ददाति॥"</p>

                <div class="frame">
                  <Button className="button_more custom-btn" onPress={handler8} style={{ borderRadius: "0", fontSize: "15px", width: "100%" }}>
                    <span>
                      Book Now
                    </span>
                  </Button>
                </div>
                <div>
                  <Modal
                    closeButton
                    // scroll
                    blur
                    width="800px"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    open={visible8}
                    onClose={closeHandler8}
                  >
                    <div className='event_modal'>
                      <Image
                        showSkeleton
                        src="https://i.postimg.cc/ydrF3x79/mahamrityunjaypuja.jpg"
                        width={1000}
                        height={490}
                      />
                      <div>
                        <Modal.Header>
                          <Text id="modal-title" style={{ "fontWeight": 900 }} size={18}>
                            <h2 style={{ fontWeight: "bold" }}> महामृत्युंजय मंत्र अनुष्‍ठान</h2>
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Text id="modal-description" >

                            <p style={{ "fontWeight": 600 }}>
                              महामृत्युंजय मंत्र के वर्णो (अक्षरों) का अर्थ महामृत्युंघजय मंत्र के वर्ण पद वाक्यक चरण आधी ऋचा और सम्पुतर्ण ऋचा-इन छ: अंगों के अलग अलग अभिप्राय हैं।   </p>
                            {isShowMore && (
                              <p style={{ "fontWeight": 600 }}>
                                <p style={{ "fontWeight": 600 }}> ओम त्र्यंबकम् मंत्र के 33 अक्षर हैं जो महर्षि वशिष्ठर के अनुसार 33 देवताआं के घोतक हैं। उन तैंतीस देवताओं में 8 वसु 11 रुद्र और 12 आदित्यठ 1 प्रजापति तथा 1 षटकार हैं।
                                </p>
                                <p style={{ "fontWeight": 600 }}>  इन तैंतीस देवताओं की सम्पुर्ण शक्तियाँ महामृत्युंजय मंत्र से निहीत होती है जिससे महा महामृत्युंजय का पाठ करने वाला प्राणी दीर्घायु तो प्राप्त करता ही हैं । साथ ही वह नीरोग, ऐश्व‍र्य युक्ता धनवान भी होता है । महामृत्युंरजय का पाठ करने वाला प्राणी हर दृष्टि से सुखी एवम समृध्दिशाली होता है । भगवान शिव की अमृतमययी कृपा उस निरन्तंर बरसती रहती है।
                                </p>
                                <p style={{ "fontWeight": 600 }}>
                                  <b> || महामृत्युंजय मंत्र || </b>
                                  <br />  || ॐ त्र्यम्‍बकं यजामहे सुगन्धिं पुष्टिवर्धनम् उर्वारुकमिव बन्‍धनान् मृत्‍योर्मुक्षीय मा मृतात् ||
                                  <br /> <b> महामृत्‍युंजय मंत्र का अर्थ</b>
                                  <br />   समस्‍त संसार के पालनहार तीन नेत्रो वाले शिव की हम अराधना करते है विश्‍व मे सुरभि फैलाने वाले भगवान शिव मृत्‍यु न कि मोक्ष से हमे मुक्ति दिलाएं ।
                                </p>     </p>)}
                            <button onClick={toggleReadMoreLess}>
                              {isShowMore ? "Read Less" : "Read More"}
                            </button>
                          </Text>
                        </Modal.Body>
                        <Modal.Footer style={{ "marginRight": "1.25rem", "marginTop": "2.5rem" }}>
                          <div class="frame">
                            <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                          </div>     <div class="frame">
                            <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                              <img src={phone} alt="" /> 9754458233</span></button></a>
                          </div>
                        </Modal.Footer>
                      </div>
                    </div>
                  </Modal>

                </div>

              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Puja