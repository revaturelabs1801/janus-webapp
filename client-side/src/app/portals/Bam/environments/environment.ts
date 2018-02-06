
const context = 'http://localhost:9001/api/v1';
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

    calendar: {
        getSubtopicsByBatchPaginationUrl: (batchId: number, pageNumber: number, pageSize: number) =>
            `${context}/calendar/subtopicspagination/${batchId}/${pageNumber}/${pageSize}/`,
        getSubtopicsByBatchUrl: (batchId: number) => `${context}/calendar/subtopics/${batchId}`,
        getNumberOfSubTopicsByBatchUrl: (batchId: number) => `${context}/calendar/getnumberofsubtopics/${batchId}`,
        getTopicsByBatchPagUrl: (batchId: number) => `${context}/calendar/topics/${batchId}`,
        changeTopicDateUrl: (subtopicId: number, batchId: number, status: number) =>
            `${context}/calendar/dateupdate/${subtopicId}/${batchId}/${status}`,
        updateTopicStatusUrl: (subtopicId: number, batchId: number, status: number) =>
            `${context}/calendar/${subtopicId}/${batchId}/${status}`,
        addTopicsUrl: () => `${context}/calendar/addtopics`,
    },

    assignForce: {
        refreshBatches: () => `${context}/refreshbatches`
    },

    users: {
        getAllUsersUrl: () => `${context}/users/all`,
        getAllTrainersUrl: () => `${context}/users/alltrainers`,
        getAllAssociatesUrl: () => `${context}/users/allassociates`,
        getUsersInBatchUrl: (batchId: number) => `${context}/users/inbatch?batchId=${batchId}`,
        dropUserFromBatchUrl: () => `${context}/users/drop?userId`,
        updateUserUrl: () => `${context}/users/update`,
        addUserUrl: () => `${context}/users/register`,
        resetPasswordUrl: () => `${context}/users/reset`,
        removeUserUrl: (userId: number) => `${context}/users/remove?userId=${userId}`,
        addUserToBatchUrl: (batchId: number, userId: number) => `${context}/users/add?userId=${userId}&batchId=${batchId}`,
        getUsersNotInBatchUrl: () => `${context}/users/notinabatch`,
        recoverPasswordUrl: () => `${context}/users/recovery`
    },

    topic: {
        addTopicName: (name: string) => `${context}/topic/add?name=${name}`,
    },

    subtopic: {
        addSubTopicName: (subtopicName: string, topicId: number, typeId: number) => `${context}/subtopic/add?
        subtopicName=${subtopicName}&topicId=${topicId}&typeId=${typeId}`
    }
};
