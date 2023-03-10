import React from "react";
import { Helmet } from "react-helmet";

const พระภิกษุ = () => {
  const TITLE = "พระภิกษุสามารถเป็นเจ้ามรดก หรือรับมรดกได้ไหม ?";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ตามประมวลกฎหมายแพ่งและพาณิชย์ลักษณะมรดก
          กล่าวว่า ไม่ว่าพระภิกษุจะเป็นทายาทโดยธรรม หรือทายาทผู้รับพินัยกรรม
          ทรัพย์สินที่พระภิกษุมีก่อนอุปสมบทกับหลังอุปสมบทจะตกแก่ผู้ใดนั้น
          สามารถแยกพิจารณาได้ 2 กรณี คือ กรณีพระภิกษุเป็นทายาท
          และกรณีที่พระภิกษุเป็นเจ้ามรดก
        </p>

        {/* 1. กรณีพระภิกษุเป็นทายาท */}
        <h2 id="initial-header">1. กรณีพระภิกษุเป็นทายาท</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <mark className=" bg-[#fee9b2] rounded-xl">
            พระภิกษุในฐานะทายาทสามารถรับมรดกจากเจ้ามรดกได้
          </mark>{" "}
          ซึ่งในฐานะทายาทนั้นสามารถแยกออกเป็น 2 ประเภท คือ
          <ul className=" list-decimal ml-16 mt-3 mb-4">
            <li>
              <b>ถ้าพระภิกษุเป็นทายาทโดยธรรม</b> และต้องการรับมรดก
              พระภิกษุต้องสึกออกมาเสียก่อน
              จากนั้นมาเรียกร้องเอาทรัพย์สินมรดกในฐานะทายาทโดยธรรมภายใน 1 ปี
              นับแต่เจ้ามรดกตาย หรือนับแต่เมื่อรู้หรือควรได้รู้ถึงความตาย
              ถ้าไม่สึกออกมาเสียก่อน ทายาทผู้นั้นจะไม่สามารถรับมรดกได้
              โดยอายุความที่เรียกร้องเอาทรัพย์มรดกนั้นต้องเรียกร้องภายใน 10
              ปีนับแต่เจ้ามรดกถึงแก่ความตายเท่านั้น
            </li>
            <li>
              <b>ถ้าพระภิกษุเป็นทายาทผู้รับพินัยกรรม</b>{" "}
              สามารถรับมรดกตามพินัยกรรมได้ทันที พระภิกษุไม่จำเป็นต้องสึกออกมา
            </li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" text-red-600">***</span>{" "}
          โดยถ้าทายาทที่มีสิทธิรับมรดกนั้นได้อุปสมบทภายหลังเจ้ามรดกตาย
          ทายาทผู้นั้นย่อมมีอำนาจเรียกร้องเอาทรัพย์มรดกในฐานะทายาทโดยธรรมได้
          โดยไม่ต้องสึกออกมา
        </p>

        {/* 2. กรณีพระภิกษุเป็นเจ้ามรดก */}
        <h2 id="second-header">2. กรณีพระภิกษุเป็นเจ้ามรดก</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;กรณีพระภิกษุเป็นเจ้ามรดก
          ตามประมวลกฎหมายแพ่งและพาณิชย์ สามารถแยกทรัพย์สินของพระภิกษุได้ 2
          ประเภท คือ ทรัพย์สินของพระภิกษุที่ได้มาในระหว่างบวช
          และทรัพย์สินของพระภิกษุที่ได้มาก่อนบวช
        </p>

        <h3 id="third-header">2.1 ทรัพย์สินของพระภิกษุที่ได้มาในระหว่างบวช</h3>
        <p className="ml-8">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <mark className=" bg-[#fee9b2] rounded-xl">
            ทรัพย์สินของพระภิกษุที่ได้มาในระหว่างบวช
          </mark>{" "}
          เช่น มีญาติโยมศรัทธาถวายเงินทองให้{" "}
          <mark className=" bg-[#fee9b2] rounded-xl">
            เมื่อพระภิกษุถึงแก่มรณภาพ
            ทรัพย์สินจะตกเป็นสมบัติของวัดที่เป็นภูมิลำเนาของพระภิกษุทันที
          </mark>{" "}
          เว้นแต่พระภิกษุได้จำหน่าย หรือโอนไปในระหว่างมีชีวิต
          หรือพระภิกษุได้ทำพินัยกรรมยกทรัพย์สินมรดกให้บุคคลอื่น
          ทรัพย์สินมรดกนี้จะไม่ตกเป็นสมบัติของวัด
        </p>

        <h3 id="fourth-header">2.2 ทรัพย์สินของพระภิกษุที่ได้มาก่อนบวช</h3>
        <p className="ml-8">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <mark className=" bg-[#fee9b2] rounded-xl">
            ทรัพย์สินของพระภิกษุที่ได้มาก่อนบวช
          </mark>{" "}
          ไม่ว่าจะเป็นอสังหาริมทรัพย์ หรือสังหาริมทรัพย์
          <mark className=" bg-[#fee9b2] rounded-xl">
            เมื่อพระภิกษุถึงแก่มรณภาพ
          </mark>{" "}
          ทรัพย์สินเหล่านี้จะไม่ตกเป็นสมบัติของวัด แต่
          <mark className=" bg-[#fee9b2] rounded-xl">
            จะตกทอดแก่ทายาทโดยธรรมของพระภิกษุแทน
          </mark>
        </p>
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
          <li>
            <a className="text-indigo-700 underline" href="/thai/1">
              ทายาทในกองมรดกสามารถเป็นใครได้บ้าง ?
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default พระภิกษุ;
