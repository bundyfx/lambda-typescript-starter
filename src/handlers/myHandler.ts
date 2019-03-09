import { MyService } from 'src/services/MyService'; // Import any Services you need

import { TaskHandler } from 'src/types/TaskHandler'; // Import any types/alias you need

import { KinesisStreamEvent } from 'aws-lambda'; // Import Event Type Definitions - Kinesis Used as example

const myService = new MyService(); // Create new Service instances outside the handler

const myHandler: TaskHandler = async (event: KinesisStreamEvent): Promise<any> => {
  // Some awesome code
};

export { myHandler };
