import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"

const พินัยกรรมอิส = () => {
  const TITLE = "พินัยกรรมอิส";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        {/* ความหมาย */}
        <div>
          <h2 id="initial-header">1. ความหมายของพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พินัยกรรม หรือ วะศิยะฮฺ ตามคำนิยามของนักกฎหมายอิสลามหมายถึง การยกกรรมสิทธิ์ให้กับผู้อื่นทีมีผลภายหลังจากการตายโดยความเสน่หา ไม่ว่าจะเป็นจะเป็นวัตถุหรือผลประโยชน์ก็ตาม 
          </p>
        </div>{/* ความหมาย */}

        {/* สัดส่วนการทำพินัยกรรม */}
        <div>
          <h2 id="second-header">2. สัดส่วนในการทำพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตามบทบัญญัติอิสลามทรัพย์พินัยกรรมจะต้องเป็นสิ่งที่สามารถตกทอดแก่ผู้อื่นได้ มีลักษณะเป็นทรัพย์สินที่แน่นอน เป็นสิ่งที่มีประโยชน์ต่อบุคคลใดบุคคลหนึ่งตามหลักการอิสลาม และจะต้องไม่เกินหนึ่งในสาม (1/3) 
            ของทรัพย์มรดกทั้งหมด โดยยึดเอาจากคำพูดของท่านรอสูล (ศ.ล.) ที่ปรากฏในหะดีษ สะอัด อะบีวักกอส (ร.ฎ.) ที่มีความว่า “แต่ให้ท่านบริจาคเศษหนึ่งส่วนสามและเศษหนึ่งส่วนสามก็ถือว่ามากแล้ว” (Muslim Ibn Hajjaj,1955) ถ้าทำพินัยกรรมเกินหนึ่งในสามของทรัพย์มรดกทั้งหมด ส่วนที่เกินนั้นจะตกเป็นโมฆะ จนกว่าจะได้รับความยินยอมจากทายาทโดยธรรม
          </p>
        </div>{/* สัดส่วนการทำพินัยกรรม */}

        {/* อปก.พินัยกรรม */}
        <div>
          <h2 id="third-header">3. องค์ประกอบการทำพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;องค์ประกอบในการทำพินัยกรรมมี 4 ประการดังนี้ 
            <p className="ml-8">
              <ul className=" list-decimal ml-8 mb-3">
                <li>ผู้ทำพินัยกรรม</li>
                <li>ผู้รับพินัยกรรม</li>
                <li>ทรัพย์สินพินัยกรรม</li>
                <li>ศีเฆาะฮฺ</li>
              </ul>
            </p>
          </p>
        </div>{/* อปก.พินัยกรรม */}

        {/* ประเภทของพินัยกรรม */}
        <div>
          <h2 id="fourth-header">4. ประเภทของพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประเภทของการทำพินัยกรรมนั้นมี 4 ประเภท
            <p className="ml-8">
                <ul className=" list-decimal ml-8 mb-3">
                  <li><b>การทำพินัยกรรมที่จำเป็นต้องกระทำ (วาญิบ)</b> 
                    <br></br>-- เช่น การทำพินัยกรรมให้ส่งคืนทรัพย์สินที่รับฝากไว้ หนี้ที่ไม่มีเอกสารบอกจำนวน สิ่งที่เป็นหน้าที่ต้องกระทำเอง การจ่ายซะกาต การบำเพ็ญหัจญ์ ค่าปรับในการขาดการถือศีลอด การละหมาดและสิทธิของผู้อื่นที่จะต้องชดใช้
                  </li>
                  <li><b>พินัยกรรมที่ควรกระทำ (มุสตะหับบะฮฺ)</b> 
                    <br></br>-- เช่น การทำพินัยกรรมให้กับเครือญาติใกล้ชิดที่ไม่มีสิทธิรับมรดก บุคคลที่มีความต้องการและขัดสน บุคคลที่มีหนี้สาธารณประโยชน์
                  </li>
                  <li><b>พินัยกรรมที่อนุญาตให้กระทำได้ (มุบาฮฺ)</b> 
                    <br></br>-- เช่น การทำพินัยกรรม (วะศิยะฮฺ) ให้กับทายาทและบุคลอื่นที่ร่ำรวย
                  </li>
                  <li><b>พินัยกรรมที่ไม่ควรกระทำ (มักรุฮะฮฺ)</b> 
                    <br></br>-- เช่น การทำพินัยกรรม (วะศิยะฮฺ) ให้บุคลลกระทำความชั่ว และการทำพินัยกรรม (วะศิยะฮฺ) ของผู้ยากจนที่มีทายาทรับมรดก บางครั้งการทำพินัยกรรม (วะศิยะฮฺ) เป็นสิ่งต้องห้ามหากพินัยกรรม (วะศิยะฮฺ) นั้นนำไปสู่การสร้างความเสื่อมเสีย และเดือดร้อนแก่ทายาทและสังคม เช่น การทำพินัยกรรม (วะศิยะฮฺ) ในสิ่งที่ผิดหลักการอิสลาม
                  </li>
                </ul>
              </p>
          </p>
        </div>{/* ประเภทของพินัยกรรม */}

        {/* ผู้ทำพินัยกรรม */}
        <div>
          <h2 id="fifth-header">5. เงื่อนไขของผู้ทำพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ทำพินัยกรรมตามบทบัญญัติอิสลามนั้นจำเป็นต้องมีสติปัญญาสมบูรณ์ บรรลุศาสนะภาวะ มีความตั้งใจ และสมัครใจ และเป็นเสรีชน ซึ่งสิ่งเหล่านี้เป็นเงื่อนไข และถือเป็นหลักสำคัญที่สุดในการบังคับของศาสนา <mark className=" bg-[#fee9b2] rounded-xl">ดังนั้นการทำพินัยกรรมของคนวิกลจริต สติฟั่นเฟือน เป็นลมหรือสลบ และเป็นคนเมาที่ไม่ได้มีเจตนาทำให้ตนเองเมา พินัยกรรมดังกล่าวจะถือว่าใช้ไม่ได้</mark>{" "}
          </p>
        </div>{/* ผู้ทำพินัยกรรม */}

        {/* การทำพินัยกรรมในเด็ก */}
        <div>
          <h2 id="sixth-header">6. การทำพินัยกรรมในเด็ก</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การทำพินัยกรรมของผู้เยาว์ที่มีความรู้สึกรับผิดชอบแล้วหรือมุมัยยิซ (มุมัยยิซคือ เด็กที่มีอายุประมาณ 7 ขวบที่สามารถแยกแยะได้ระหว่างสิ่งที่เป็นประโยชน์กับสิ่งที่ไม่ดี) นั้นตามทัศนะของ มัซฮับมาลิกีย์ มัซฮับหัมบะลีย์ และทัศนะหนึ่งของอิหม่ามชาฟิอีย์มีความเห็นว่า พวกเขาสามารถทำพินัยกรรมได้ เพราะพินัยกรรมมิได้ทำให้กรรมสิทธิ์ของเขาหมดไปในขณะนั้นทันที และพินัยกรรมยังทำให้เขาได้รับผลบุญภายหลังจากที่เขาเสียชีวิตไปแล้ว (สมหวัง บินหะซัน: 2549)
            <br></br>ดังนั้นการทำพินัยกรรมของผู้เยาว์มีแนวทางปฏิบัติ และเป็นที่ยอมรับของท่านอุมัร อิบนุลคอฏฏอบ 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดังหลักฐานหะดิษได้กล่าวไว้ ความว่า “แท้จริง มีเด็กชายคนหนึ่งกำลังจะเสียชีวิตที่มะดีนะฮฺ ขณะที่ทายาทโดยชอบธรรมของเขาอยู่ที่ประเทศซาม (ซีเรีย) จึงได้มีการเล่าเรื่องของเขาแก่ท่านอุมัร อิบนุลคอฏฏอบ และได้มีการถามท่านว่า เด็กคนหนึ่งกำลังจะเสียชีวิตเขาทำพินัยกรรมได้หรือไม่? ท่านอุมัรตอบว่า ให้เขาทำพินัยกรรมเถิด เด็กคนนั้นจึงได้ทำพินัยกรรมด้วยกับบ่อใบหนึ่งเรียกว่า บ่อญัชม์ และทายาทของเขาได้ขายบ่อด้วยกับราคาสามหมื่น” 
            ท่านอบูบักรฺได้เล่าอีกว่า เด็กชายคนนั้นมีอายุสิบปีหรือสิบสองปีและการทำพินัยกรรมของผู้ที่ถูกบังคับ จึงถือว่าใช้ไม่ได้
          </p>
        </div>{/* การทำพินัยกรรมในเด็ก */}

        {/* ผู้นับพินัยกรรม */}
        <div>
          <h2 id="seventh-header">7. ประเภทของผู้รับพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตามบทบัญญัติอิสลามได้กำหนดไว้ว่าผู้รับพินัยกรรมในอิสลามมี 2 ประเภท
            <p className="ml-8">
                <ul className=" list-decimal ml-8 mb-3">
                  <li><b>ผู้รับที่เจาะจงตัวแน่นอน </b>
                    ผู้รับที่เจาะจงตัวแน่นอน ต้องเป็นผู้ที่สามารถเข้าถือครองสิทธิได้ขณะผู้ทำพินัยกรรมเสียชีวิต ต้องไม่เป็นการละเมิดหลักศาสนา ต้องระบุตัวผู้รับพินัยกรรมอย่างเจาะจงแน่นอน และผู้รับพินัยกรรมต้องมีตัวตนอยู่แล้ว รวมทั้งการทำพินัยกรรมเพื่อบูรณะมัสยิด ทั้งก่อสร้างและซ่อมแซม หรือเพื่อบำรุงมัสยิด เทียบเคียงได้กับการทำพินัยกรรมให้ผู้รับพินัยกรรมที่เจาะจงแน่นอน 
                    รวมทั้งโรงเรียน บ้านพักคนเดินทางและโรงพยาบาล เข้าอยู่ในความหมายของมัสยิดเช่นกัน เพราะเป็นการทำความดี และถือว่าสิ่งเหล่านี้มีตัวตนเช่นกัน ถือว่าใช้ได้
                  </li>
                  <li><b>เงื่อนไขของผู้รับพินัยกรรมที่ไม่เจาะจงตัวแน่นอน </b>
                    การทำพินัยกรรมให้แก่ผู้รับที่ไม่ได้เจาะจงตัวแน่นอน
                    เช่น ให้แก่สถาบันหนึ่งจากบรรดาสถาบันต่างๆ หรือให้แก่คนยากจน นักวิชาการ มัสยิด และโรงเรียน เป็นต้น ที่จะมีผลใช้ได้ 
                    โดยมีเงื่อนไขว่าจะต้องไม่ทำพินัยกรรมให้แก่ฝ่ายที่กระทำความชั่วหรือทำสิ่งที่เป็นมักรูห์ ดังนั้นการทำพินัยกรรมเพื่อสร้างศาสนสถานของคนต่างศาสนา หรือเพื่อก่อสร้างสถานเริงรมณ์ที่ทำให้สิ้นเปลืองเวลา ทำให้เสียผลประโยชน์ และทำให้บกพร่องในการปฏิบัติสิ่งที่เป็นวาญิบ การทำพินัยกรรมนั้นจึงใช้ไม่ได้หรือเป็นโมฆะ
                  </li>
                </ul>
            </p>
          </p>
        </div>{/* ผู้นับพินัยกรรม */}

        {/* ผลของพินัยกรรม */}
        <div>
          <h2 id="eigth-header">8. ผลของพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark className=" bg-[#fee9b2] rounded-xl">พินัยกรรมเริ่มมีผลบังคับใช้ตามกฎหมายอิสลามทันทีเมื่อผู้ทำพินัยกรรมเสียชีวิตลงและไม่มีผู้ใดสามารถที่จะเพิกถอนพินัยกรรมได้ แม้จะเป็นทายาทโดยธรรมของผู้ทำพินัยกรรมก็ตาม</mark>{" "} แต่ต้องได้หลังจากที่ได้มีการใช้จ่ายในการจัดการศพและชำระหนี้สินเรียบร้อยแล้ว และถ้าหากหนี้สินนั้นมีมากจนคลุมไปถึงทรัพย์สินทั้งหมด 
            ผู้รับพินัยกรรมก็ไม่มีสิทธิแต่ประการใด ดังที่ได้ตรัสไว้ในอัลกุรอานซูเราะฮฺ อันนิซาอฺ อายัตที่ 11 ความว่า “ภายหลังจากจัดการตามพินัยกรรมที่กระทำไว้ และจัดการหนี้สินแล้ว” 
          </p>
        </div>{/* ผลของพินัยกรรม */}

        {/* รูปแบบการทำพินันกรรม */}
        <div>
          <h2 id="ninht-header">9. รูปแบบการทำพินันกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตามบทบัญญัติอิสลาม<a className="text-indigo underline">พินัยกรรมสามารถทำได้ด้วยการเปล่งวาจา หรือการเขียนด้วยตัวเองพร้อมมีเจตนาทำพินัยกรรม และพึงกระทำต่อหน้าบุคคลที่มีความสามารถในการเป็นพยานได้ตามกฎหมาย ไม่ว่าจะเป็นการยกทรัพย์สินให้กับบุคคล หรือองค์กรต่าง ๆ โดยการใช้ถ้อยคำที่ชัดเจน</a>{" "}
            <p className="mt-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;หากต้องการเขียน สุนัตให้เขียนขึ้นต้นการวะศียะฮฺดั่งที่ปรากฏในรายงานของท่านอนัส อิบนุมาลิก เราะฎิยัลลอฮฺอันฮุ ว่า “แท้จริงแล้วบรรดาเศาะหาบะฮฺเขียนเริ่มต้นการวะศียะฮฺของพวกเขาว่า “นี้คือสิ่งที่ฉันสั่งเสียให้คนนั้นคนนี้ (กล่าวชื่อ) ฉันขอวะศียะฮฺว่าให้เขาปฏิญานว่าไม่มีพระเจ้าอื่นใดที่ควรแก่การอิบาดะฮฺนอกจากอัลลอฮฺองค์เดียวไม่มีภาคีสำหรับพระองค์ และแท้จริงมุฮำหมัดนั้นเป็นบ่าวและศาสนทูตของพระองค์  วันสิ้นโลกนั้นจะมาถึงแน่นอนไม่มีข้อสงสัยใด ๆ และอัลลอฮฺจะทรงให้ผู้อยู่ในหลุมฝังศพนั้นฟื้นขึ้นมาใหม่  แล้วเขาก็ทำการวะศียะฮฺให้ครอบครัวของเขาที่ยังมีชีวิตอยู่หลังจากเขาจงยำเกรงอัลลอฮฺอย่างแท้จริง และทำดีต่อกันระหว่างพวกเขา เชื่อฟังอัลลอฮฺและศาสนทูตของพระองค์หากเขาเป็นมุอ์มิน แล้วก็ทำการวะศียะฮฺด้วยสิ่งนบีอิบรอฮีมและยะอฺกู๊บให้สั่งเสียลูกๆของท่าน ว่า
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ความว่า “โอ้ลูก ๆ ของฉันแท้จริงอัลลอฮฺได้เลือกไว้สำหรับพวกท่านซึ่งศาสนาอิสลาม ดังนั้นท่านจงอย่าได้ตายยกเว้นในขณะที่ท่านเป็นมุสลิมเท่านั้น” [อัล-บะเกาะเราะฮฺ :132] หลังจากนั้นก็เขียนสิ่งที่เขาอยากจะวะศียะฮฺ” (หะดีษเศาะฮีหฺ บันทึกโดย  อัล-บัยฮะกีย์ หมายเลข 12463 และอัด-ดาเราะกุฏนีย์ 4/154 ดู อิรวุลเฆาะลีล หมายเลข 1647)
            </p>
            <p className="mt-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตามมัซฮับหะนะฟีย์ มัซฮับมาลิกีย์ และมัซฮับหัมบะลีย์ หากสามารถยืนยันได้ว่าเป็นลายมือของผู้ทำพินัยกรรมจริง โดยการยอมรับของทายาทหรือมีหลักฐานยืนยันว่าเป็นลายมือของเขาถึงแม้เป็นเวลานานแล้วก็ตาม ทัศนะนี้มีน้ำหนักถือว่าการทำพินัยกรรมนั้นใช้ได้ หรือจะเป็นการแสดงสัญลักษณ์สื่อความหมายที่เข้าใจได้ง่าย
            </p>
          </p>
        </div>{/* รูปแบบการทำพินันกรรม */}

        {/* การสิ้นสุดของพินัยกรรม */}
        <div>
          <h2 className="tenth-header">10. การสิ้นสุดของพินัยกรรม</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พินัยกรรมจะสิ้นสุด หรือหมดสภาพการมีผลบังคับใช้ด้วยสาเหตุใดสาเหตุหนึ่งต่อไปนี้
            <p className="ml-6">
            <ul className=" list-decimal ml-8 mb-3">
              <li><b>การถอนหรือยกเลิกพินัยกรรมโดยผู้ทำพินัยกรรมเอง</b> การถอน หรือยกเลิกพินัยกรรมนั้นเป็นกรรมสิทธิ์ของผู้ทำพินัยกรรมที่จะกระทำเมื่อใดก็ได้การถอนนั้น อาจจะกระทำได้ด้วยวาจา <span className=" text-blue-600">-- เช่น ผู้ทำพินัยกรรมกล่าวว่า “ฉันยกเลิกพินัยกรรมที่ฉันได้ทำไว้ให้กับนาย ก.” หรือ
                “ฉันทำให้พินัยกรรมของฉันที่ทาให้นาย ก. เป็นโมฆะ” เป็นต้น</span> หรือด้วยการกระทำที่แสดงถึง การถอนหรือยกเลิกพินัยกรรม <span className=" text-blue-600">-- เช่น ผู้ทำพินัยกรรมยกส่วนหนึ่งให้กับนาย ก. ต่อมาผู้ทำพินัยกรรมได้ขายสิ่งนั้นไป หรือทำทานหรือให้ผู้อื่นไป</span>
              </li>
              <li>
                <b>การเสียชีวิตของผู้รับพินัยกรรมก่อนการเสียชีวิตของผู้ทำพินัยกรรม</b> เพราะพินัยกรรมเป็นการยกให้ แต่หากผู้รับพินัยกรรมนั้นเสียชีวิตไปก่อนการให้จึงใช้ไม่ได้ เช่นเดียวกับการให้สิ่งของกับคนตาย และเพราะพินัยกรรมจะไม่มีผลบังคับนอกจากด้วยการเสียชีวิตของผู้ทำพินัยกรรม และการสนองรับของผู้รับพินัยกรรม
              </li>
              <li>
                <b>ทรัพย์พินัยกรรมสูญหาย หรือเสียหาย </b>ในกรณีที่ทรัพย์พินัยกรรมเป็นทรัพยเ์ฉพาะ หากทรัพย์พินัยกรรมเสียหายไปก่อนการรับสนองของผู้รับพินัยกรรม เพราะทรัพย์สินพินัยกรรมนั้นคือสิ่งที่ทำให้การทำพินัยกรรมมีผลบังคับหากขาดสิ่งนี้แล้วพินัยกรรมก็ย่อม
                สิ้นสุดลง <span className=" text-blue-600">-- เช่นทรัพย์สินพินัยกรรมเป็นแกะตัวหนึ่ง แต่แกะตัวนั้นได้ตายลง พินัยกรรมก็หมดสภาพไปด้วย</span>
              </li>
            </ul>
            <br></br>
            </p>
          </p>
        </div>{/* การสิ้นสุดของพินัยกรรม */}
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
        <li>
            <a className="text-indigo-700 underline" href="/islam/1">
            ความรู้ทั่วไปของกฎหมายมรดกอิสลาม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/2">
              ทายาทที่มีสิทธิและเสียสิทธิรับมรดก
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/3">
            วิธีการคำนวณมรดกอิสลาม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/4">
              การแบ่งมรดกกรณีพิเศษ
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/5">
              บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดก
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default พินัยกรรมอิส;
