import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'dfggdfg',
      label: 'Can I use react in a project',
      content: 'You can use react if you want.You can use react if you want.',
    },
    {
      id: 'dfggdfdgffg',
      label: 'Can I use Javascript in a project',
      content:
        'You can use javascript if you want.You can use javascript if you want.',
    },
    {
      id: 'dfggdfweeg',
      label: 'Can I use CSS in a project',
      content: 'You can use CSS if you want.You can use CSS if you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
