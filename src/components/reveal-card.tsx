import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RevealCardData } from '@typeDefs/component';
import { processAttribution } from '@utils/graphics-utils';
import React, { useState } from 'react';

interface ContentProps {
  open: React.MouseEventHandler<HTMLDivElement>;
  attributionStyle?: string;
  attribution?: { path: string };
  title: string;
  description: string;
}

interface DetailProps {
  close: React.MouseEventHandler<HTMLDivElement>;
  title: string;
  location?: string;
  date?: string;
  detail?: Array<string>;
}

function generateDetail(detail?: Array<string>): Array<JSX.Element> {
  if (!detail) return null;
  return detail.map((item, i) => {
    const key = `content ${i}`;
    return (
      <li className="text-sm" key={key}>
        <FontAwesomeIcon className="inline" icon={faAngleRight} />
        <p className="inline ml-2">{item}</p>
      </li>
    );
  });
}

const Content: React.FC<ContentProps> = (props) => {
  const { open, attribution, attributionStyle, title, description } = props;
  const attributionComponent = processAttribution(attribution, attributionStyle);
  return (
    <div className="flex flex-col h-full justify-between fade-in">
      <div className="space-y-3">
        <div className="cursor-pointer" onClick={open}>
          {attributionComponent}
        </div>
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cursor-pointer border-t mt-3" onClick={open}>
        <p className="cursor-pointer text-center pt-3">Click here for more detail</p>
      </div>
    </div>
  );
};

const Detail: React.FC<DetailProps> = (props) => {
  const { close, title, location, date, detail } = props;
  return (
    <div className="fade-in">
      <div onClick={close} className="cursor-pointer">
        <span className="text-xl">{title}</span>
        <FontAwesomeIcon className="float-right" icon={faTimes} />
      </div>
      <div className="flex flex-wrap justify-between">
        <h3 className="mt-2">{location}</h3>
        <h3 className="mt-2">{date}</h3>
      </div>

      <ul className="space-y-2 mt-2">{generateDetail(detail)}</ul>
    </div>
  );
};

const RevealCard: React.FC<RevealCardData> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const { attribution, attributionStyle, title, description, date, location, detail } = props;
  const contentProps = { attribution, attributionStyle, title, description, open };
  const detailProps = { date, location, title, detail, close };
  return (
    <div className="border-2 px-6 py-4 rounded-xl shadow-md">
      {isOpen ? <Detail {...detailProps} /> : <Content {...contentProps} />}
    </div>
  );
};

export default RevealCard;
