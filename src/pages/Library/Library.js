import React from 'react'
import Css from './library.module.css'
const Library = () => {
  return (
    <div className={Css.wrapper}>
      <div className={Css.row}>
      <p className={Css.title} >Foydalanilgan adabiyotlar roʻyxati:</p>
      <p className={Css.title1}>1.	Ислом энциклопедияси / З.Ҳусниддинов таҳрири остида. – Тошкент: ЎзМЭ, 2004. – 313 б. </p>
      <p className={Css.title1}>2.	История средних веков. Т.1-2. Под ред. С.П.Карпова. – Москва: «Высшая школа», 2003. </p>
      <p className={Css.title1}>3.	Пиримқулов Ш.Д. Ўрта асрларда Англия. – Тошкент, 2005.</p>
      <p className={Css.title1} >4.	Салимов Т.Ў. Жаҳон тарихи (Европа мамлакатлари V-XV асрларда) // Дарслик. – Тошкент: “Университет”, 2014. – 296 б.</p>
      <p className={Css.title1}>5.	Средневековый мир в терминах, именах и названиях: словарь-справочник. / Науч. ред. В.А.Федосик, Е.Д.Смирнова, Л.П.Сушкевич. Сост. Е.Д.Смирнова. – Минск: Беларусь, 1999. – 383 с.</p>
      <p className={Css.title1}>6.	Тарих атамалари изоҳли луғати / М.Исмоилов, А.Шаропов. – Тошкент: Akademnashr, 2013. – 560 б.</p>
      <p className={Css.title1} >7.	Ўзбекистон Миллий энциклопедияси. 12 жилдлик. – Тошкент: ЎзМЭ, 2000-2006. </p>
      <p className={Css.title1}>8.	Internet materillari (https://www.wikipedia.org/ – ochiq ensiklopediyasi, https://old.bigenc.ru/ – Rossiya katta ensiklopediyasi va boshqa ensiklopediya saytlari)</p>
      <p className={Css.title2}>Elektron lugʻat muqovasida foydalanilgan rasmlar "https://www.pngegg.com/ru/" saytidan olindi.</p>
      </div>
    </div>
  )
}

export default Library