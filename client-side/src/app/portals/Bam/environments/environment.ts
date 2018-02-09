
// const context = 'http://localhost:9001/api/v1';
const context = 'http://18.219.98.213:9001/api/v1';
export const environment = {
    production: false,
    context: context,

    batch: {
        getBatchAllUrl: () => `${context}/batches/all`,
        getPastBatchesUrl: (email: string) => `${context}/batches/past/${email}/`,
        getFutureBatchesUrl: (email: string) => `${context}/batches/future/${email}/`,
        getBatchInProgressUrl: (email: string) => `${context}/batches/inprogress/${email}/`,
        getAllBatchesInProgressUrl: (email: string) => `${context}/batches/allinprogress/${email}/`,
        getBatchByIdURL: (batchId: number) => `${context}/batches/byid/${batchId}/`,
        updateBatchUrl: () => `${context}/batches/updatebatch`,
        getAllBatchTypesUrl: () => `${context}/batches/batchtypes`,
    },

    curriculum: {
        getCurriculumAllUrl: () => `${context}/curriculum/all`,
        getCurriculumByIdUrl: (id: number) => `${context}/curriculum/getcurriculum/${id}`,
        getSchedulesByCurriculumIdUrl: (id: number) => `${context}/curriculum/schedule/${id}`,
        getTopicPoolAllUrl: () => `${context}/curriculum/topicpool`,
        getSubtopicPoolAllUrl: () => `${context}/curriculum/subtopicpool`,
        addCurriculumUrl: () => `${context}/curriculum/addcurriculum`,
        makeCurriculumMasterByIdUrl: (id: number) => `${context}/curriculum/makemaster/${id}`,
        syncBatchByIdUrl: (id: number) => `${context}/curriculum/syncbatch/${id}`
    },

    calendar: {
        getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
            `${context}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
        getSubtopicsByBatchUrl: (batchId: number) => `${context}/calendar/subtopics/${batchId}`,
        getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${context}/calendar/getnumberofsubtopics/${batchId}`,
        getTopicsByBatchPagUrl: (batchId: number) => `${context}/calendar/topics/${batchId}`,
        changeTopicDateUrl: (subtopicId: number, batchId: number, date: number) =>
            `${context}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`,
        updateTopicStatusUrl: (subtopicId: number, batchId: number, status: string) =>
            `${context}/calendar/statusupdate/${subtopicId}/${batchId}/${status}`,
        addTopicsUrl: () => `${context}/calendar/addtopics`,
    },

    addsubtopics: {
        getBatchSubtopicsUrl: (batchId: number, pageNumber: number, pageSize: number) =>
                        `${context}/calendar/subtopicspagination/${batchId}/${pageSize}/${pageNumber}`,
        getBatchIdUrl: (batchId: number) => `${context}/batches/byid/${batchId}`,
        addSubtopicUrl: () => `${context}/subtopic/addsubtopic`,
        getSubtopicPoolUrl: () => `${context}/curriculum/topicpool`,
        updateDateUrl: (subtopicId: number, batchId: number, date: number) =>
                        `${context}/calendar/dateupdate/${subtopicId}/${batchId}/${date}`
    },

    assignForce: {
        refreshBatches: () => `${context}/refreshbatches`
    },

    users: {
        getAllUsersUrl: () => `${context}/users/all`,
        getAllTrainersUrl: () => `${context}/users/alltrainers`,
        getAllAssociatesUrl: () => `${context}/users/allassociates`,
        getUsersInBatchUrl: (batchId: number) => `${context}/users/inbatch/${batchId}`,
        dropUserFromBatchUrl: (userId: number) => `${context}/users/drop/${userId}`,
        updateUserUrl: () => `${context}/users/update`,
        addUserUrl: () => `${context}/users/register`,
        resetPasswordUrl: () => `${context}/users/reset`,
        removeUserUrl: (userId: number) => `${context}/users/remove/${userId}`,
        addUserToBatchUrl: (batchId: number, userId: number) => `${context}/users/add/${userId}/${batchId}`,
        getUsersNotInBatchUrl: () => `${context}/users/notinabatch`,
        recoverPasswordUrl: () => `${context}/users/recovery`
    },

    topic: {
        addTopicName: (name: string) => `${context}/topic/add/${name}`,
    },

    subtopic: {
       addSubTopicName: (subtopicName: string, topicId: number, typeId: number) => `${context}/subtopic/${typeId}/${topicId}/${subtopicName}`
    }
};