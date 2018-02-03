const context = 'http://localhost:9001/api/v1';
export const environment = {
    production: false,
    context: context,

    batch: {
        getBatchAllUrl: () => `${context}/batches/all`,
        getPastBatchesUrl: (email: string) => `${context}/batches/past?email=${email}`,
        getFutureBatchesUrl: (email: string) => `${context}/batches/future?email=${email}`,
        getBatchInProgressUrl: (email: string) => `${context}/batches/inprogress?email=${email}`,
        getAllBatchesInProgressUrl: (email: string) => `${context}/batches/allinprogress?email=${email}`,
        getBatchByIdURL: (bid: number) => `${context}/batches/byid?bid=${bid}`,
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
    syncBatchByIdUrl: (id: number) => `${context}/curriculum/syncbatch/${id}`},

    calendar: {
        getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
            `${context}/calendar/subtopicspagination?batchId=${batchId}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
        getSubtopicsByBatchUrl: (batchId: number) => `${context}/calendar/subtopics?batchId=${batchId}`,
        getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${context}/calendar/getnumberofsubtopics?batchId=${batchId}`,
        getTopicsByBatchPagUrl: (batchId: number) => `${context}/calendar/topics?batchId=${batchId}`,
        changeTopicDateUrl: (subtopicId: number, batchId: number, status: number) =>
            `${context}/calendar/dateupdate?subtopicId=${subtopicId}&batchId=${batchId}&status=${status}`,
        updateTopicStatusUrl: (subtopicId: number, batchId: number, status: number) =>
            `${context}/calendar?subtopicId=${subtopicId}&batchId=${batchId}&status=${status}`,
        addTopicsUrl: () => `${context}/calendar/addtopics`,
    },

    assignForce: {
        refreshBatches: () => `${context}/refreshbatches`
    }

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
