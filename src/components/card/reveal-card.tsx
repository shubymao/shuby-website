import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Attribution, RevealCardData } from '@typeDefs/data';
import { processAttribution } from '@utils/graphics-utils';
import React, { ReactElement, useState } from 'react';
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

const generateDetail = (detail?: Array<string>): Array<ReactElement> => {
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
};

const Content = (props: ContentProps): ReactElement => {
  const { open, attribution, title, description } = props;
  const attributionComponent = processAttribution(attribution);
  return (
    <div className="flex flex-col items-center h-full space-y-3 fade-in">
      <div className="cursor-pointer" onClick={open}>
        {attributionComponent}
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <h2 className="text-xl">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="w-full pt-2 mt-3 border-t cursor-pointer" onClick={open}>
          <p className="text-center">Click here for more detail</p>
        </div>
      </div>
    </div>
  );
};

const Detail = (props: DetailProps): ReactElement => {
  const { close, title, location, date, detail } = props;
  return (
    <div className="fade-in">
      <div onClick={close} className="flex items-center justify-between cursor-pointer">
        <p className="text-xl">{title}</p>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="flex flex-wrap justify-between">
        <h3 className="mt-2">{location}</h3>
        <h3 className="mt-2">{date}</h3>
      </div>
      <ul className="mt-2 space-y-2">{generateDetail(detail)}</ul>
    </div>
  );
};

Detail.defaultProps = {
  location: '',
  date: '',
  detail: null,
};

const RevealCard = (props: RevealCardData): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const { attribution, title, description, date, location, detail } = props;
  const contentProps = { attribution, title, description, open };
  const detailProps = { date, location, title, detail, close };
  return <CardWrapper>{isOpen ? <Detail {...detailProps} /> : <Content {...contentProps} />}</CardWrapper>;
};

export default RevealCard;
