import React, { useState } from 'react';
import s from './Accardeon.module.css'

export function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordion_item}>
            <div className={s.accordion_header} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={s.accordion_content}>
                    {children}
                </div>
            )}
        </div>
    );
}

export function Accordion() {
    return (
        <div className={s.accordion}>
            <AccordionItem title="Факты о марвел">
                <p>До фильмов Marvel братья Руссо были заняты продюсированием
                     таких шоу, как Community и Arrested Development .</p>
            </AccordionItem>
            <AccordionItem title="Факты о бмв">
                <p>Эмблема BMW — круг, разделённый на четыре сектора: два белых и два синих. По одной из версий, это стилизованное изображение пропеллера на фоне голубого неба.
                     На самом деле разработчики объединили логотип фирмы Rapp Motorenwerke с цветами флага Баварии.</p>
            </AccordionItem>
            <AccordionItem title="Факт о Татарстане">
                <p>Столица Татарстана Казань носит звание «третьей столицы России»</p>
            </AccordionItem>
        </div>
    );
}