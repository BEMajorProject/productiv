type taskType = {
  title: string;
  description: string;
  labels: string[];
  date: Date;
  color: string;
};

const TaskCard = ({ color, date, description, labels, title }: taskType) => {
  return (
    <div
      className={
        `bg-${color} ` +
        'hover:w-[105%] hover:-translate-x-2 hover:py-5 hover:-mb-1 duration-150 w-full border border-[#00000055] rounded-lg py-3 px-4 flex flex-col h-fit mb-3 break-inside-avoid break-after-avoid break-before-avoid group'
      }
    >
      <div className=" flex justify-between">
        <div className="flex gap-1">
          {labels.map((label: string) => (
            <div className="text-xs font-thin rounded-full border px-2 border-[#2a2a2a44]">
              {label}
            </div>
          ))}
        </div>
        <input
          type="checkbox"
          className="w-[16px] h-[16px] rounded-md border border-3 border-black float-right bg-transparent"
        />
      </div>
      <div className="font-bold mt-2">{title}</div>
      <div>{}</div>
      <div className="hidden group-hover:block">{description}</div>
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <div>{new Date(date).toLocaleDateString()}</div>
          <div className="-mt-1">{new Date(date).toLocaleTimeString()}</div>
        </div>
        <input
          type="radio"
          className="w-[16px] h-[16px] rounded-full border border-3 border-black float-right bg-transparent"
        />
      </div>
    </div>
  );
};
const TaskManager = () => {
  const tasks: taskType[] = [
    {
      title: 'Do study',
      description: 'Study Astrophysics for exam which is in 20min',
      labels: ['Study', 'College', 'Marks'],
      date: new Date(),
      color: 'myteal',
    },
    {
      title:
        'Do study Study Astrophysics for exam which is in 20minStudy Astrophysics for exam which is in 20min',
      description: 'Study Astrophysics for exam which is in 20min',
      labels: ['Study', 'College', 'Marks'],
      date: new Date(),
      color: 'myyellow',
    },
    {
      title: 'Do study',
      description: 'Study Astrophysics for exam which is in 20min',
      labels: ['Study', 'College', 'Marks'],
      date: new Date(),
      color: 'myblue',
    },
    {
      title: 'Do study',
      description: 'Study Astrophysics for exam which is in 20min',
      labels: ['Study', 'College', 'Marks'],
      date: new Date(),
      color: 'myyellow',
    },
  ];

  const handleRefresh = () => {
    console.log('Tasks refreshed');
  };

  return (
    <div className="w-3/5 flex flex-col flex-[4]">
      <div className="flex border-black justify-center items-center border-l border-collapse h-24 gap-4">
        <input
          type="text"
          className="w-7/12 border border-black rounded-full px-4 py-2 placeholder:text-neutral-500"
          placeholder="Start typing to add new task"
        />
        <button
          className="bg-[#141414] p-1 rounded-full text-white px-4 py-2"
          onClick={handleRefresh}
        >
          Refresh Tasks
        </button>
      </div>
      <div className="flex border-black justify-center place-content-center border border-collapse flex-1 p-8">
        <div className="flex flex-col flex-1 items-center gap-8">
          <div className="h-8 flex gap-3 font-semibold">
            <div className="flex justify-center items-center p-8 py-5 rounded-full w-fit bg-[#141414] text-white duration-150 ease-out">
              Today
            </div>
            <div className="flex justify-center items-center p-8 py-5 rounded-full w-fit hover:bg-gray-600 hover:text-white duration-150 ease-out">
              Upcoming
            </div>
            <div className="flex justify-center items-center p-8 py-5 rounded-full w-fit hover:bg-gray-600 hover:text-white duration-150 ease-out">
              Done
            </div>
          </div>

          <div className="xl:columns-4 lg:columns-3  md:columns-1 w-full h-full p-4 ">
            {[...tasks].map(
              ({ color, date, description, labels, title }, index: number) => (
                <TaskCard
                  key={index}
                  color={color}
                  date={date}
                  description={description}
                  labels={labels}
                  title={title}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
