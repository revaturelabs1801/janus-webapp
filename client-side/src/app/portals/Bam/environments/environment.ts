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

  cirriculum: {
    getCirriculumAllUrl: () => `${context}/curriculum/all`,
    getCirriculumByIdUrl: (id: number) => `${context}/curriculum/getcurriculum/${id}`,
    getSchedulesByCurriculumIdUrl: (id: number) => `${context}/curriculum/schedule/cirriculumId/${id}`,
    getTopicPoolAllUrl: () => `${context}/curriculum/topicpool`,
    getSubtopicPoolAllUrl: () => `${context}/curriculum/subtopicpool`,
    addCurriculumUrl: () => `${context}/curriculum/addcurriculum`,
    makeCurriculumMasterByIdUrl: (id: number) => `${context}/curriculum/makemaster/${id}`,
    syncBatchByIdUrl: (id: number) => `${context}/curriculum/syncbatch/${id}`}

//     calendar: {
// //   ResponseEntity<List<Subtopic>> getSubtopicsByBatchPagination
// //   ResponseEntity<List<Subtopic>> getSubtopicsByBatch
// //   ResponseEntity<Long> getNumberOfSubTopicsByBatch
// //   ResponseEntity<List<TopicWeek>> getTopicsByBatchPag
// //   changeTopicDate
// //   updateTopicStatus
// //   addTopics
//   }

  };
