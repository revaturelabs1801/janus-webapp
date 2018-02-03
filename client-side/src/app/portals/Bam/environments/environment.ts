const context = 'http://localhost:9001/api/v1';
export const environment = {
  production: false,
  context: context,

  batch: {
    getBatchAllUrl: () => `${context}/batches/all`,
    getPastBatchesUrl: (email: string) => `${context}/batches/past/${email}`,
    getFutureBatchesUrl: (email: string) => `${context}/batches/future/${email}`,
    getBatchInProgressUrl: (email: string) => `${context}/batches/inprogress/${email}`,
    getAllBatchesInProgressUrl: (email: string) => `${context}/batches/allinprogress/${email}`,
    getBatchByIdURL: (bid: number) => `${context}/batches/byid/${bid}`,
    updateBatchUrl: () => `${context}/batches/updatebatch`,
    getAllBatchTypesUrl: () => `${context}/batches/batchtypes`,
  },

  calendar: {
//   ResponseEntity<List<Subtopic>> getSubtopicsByBatchPagination
//   ResponseEntity<List<Subtopic>> getSubtopicsByBatch
//   ResponseEntity<Long> getNumberOfSubTopicsByBatch
//   ResponseEntity<List<TopicWeek>> getTopicsByBatchPag
//   changeTopicDate
//   updateTopicStatus
//   addTopics
  }

};
