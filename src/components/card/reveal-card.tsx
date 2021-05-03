import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Attribution, RevealCardData } from '@typeDefs/data';
import { processAttribution } from '@utils/graphics-utils';
import React, { useState } from 'react';
import CardWrapper from './card-wrapper';

interface ContentProps {
  open: React.MouseEventHandler<HTMLDivElement>;
  attribution: Attribution;
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
  const { open, attribution, title, description } = props;
  const attributionComponent = processAttribution(attribution);
  return (
    <div className="flex flex-col items-center space-y-3 h-full fade-in">
      <div className="cursor-pointer" onClick={open}>
        {attributionComponent}
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div className="space-y-2">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="w-full cursor-pointer pt-2 mt-3 border-t" onClick={open}>
          <p className="text-center">Click here for more detail</p>
        </div>
      </div>
    </div>
  );
};

const Detail: React.FC<DetailProps> = (props) => {
  const { close, title, location, date, detail } = props;
  return (
    <div className="fade-in">
      <div onClick={close} className="flex cursor-pointer justify-between items-center">
        <p className="text-xl">{title}</p>
        <FontAwesomeIcon icon={faTimes} />
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
  const { attribution, title, description, date, location, detail } = props;
  const contentProps = { attribution, title, description, open };
  const detailProps = { date, location, title, detail, close };
  return <CardWrapper>{isOpen ? <Detail {...detailProps} /> : <Content {...contentProps} />}</CardWrapper>;
};

export default RevealCard;
