import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/Chatbot/molecules/Options';
import ExperienceCards from '../../components/Chatbot/organisms/ExperienceCards';
import ProjectCards from '../../components/Chatbot/organisms/ProjectCards';
import SkillCards from '../../components/Chatbot/organisms/SkillCards';
import BlogCards from '../../components/Chatbot/organisms/BlogCards';

const getMoodOptions = (actionProvider) => {
    return [
        {
            text: 'What are you selling?',
            handler: () => actionProvider.handleGoodMood(),
            id: 1,
        },
        {
            text: 'Any Suggestions?',
            handler: () => actionProvider.handleBadMood(),
            id: 2,
        },
    ];
};

const getJokeOptions = (actionProvider) => {
    return [
        {
            text: "LOL that's funny",
            handler: () => actionProvider.handleGoodMoodFinally(),
            id: 1,
        },
        {
            text: 'Tell me another one',
            handler: () => actionProvider.handleBadMoodAgain(),
            id: 2,
        },
    ];
};

const getPersonalOptions = (actionProvider) => {
    return [
        {
            text: 'Men Clothing',
            handler: () => actionProvider.handleExperience(),
            id: 1,
        },
        {
            text: 'Women Clothing',
            handler: () => actionProvider.handleProjects(),
            id: 2,
        },
        {
            text: 'Unisex Clothing',
            handler: () => actionProvider.handleSkills(),
            id: 3,
        },
        {
            text: 'Accessories',
            handler: () => actionProvider.handleBlogs(),
            id: 4,
        },
    ];
};

const ConfigChat = {
    botName: 'Jeffrey Yu',
    initialMessages: [
        createChatBotMessage(
            "Hi, I'm Thimira. Nice to meet you! How can I help you?",
            {
                widget: 'moodOptions',
            }
        ),
    ],
    // customStyles: {
    //   botMessageBox: {
    //     backgroundColor: '#147efb',
    //   },
    //   chatButton: {
    //     backgroundColor: '#147efb',
    //   },
    // },
    widgets: [
        {
            widgetName: 'moodOptions',
            widgetFunc: ({ actionProvider }) => (
                <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
            ),
        },
        {
            widgetName: 'jokeOptions',
            widgetFunc: ({ actionProvider }) => (
                <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
            ),
        },
        {
            widgetName: 'personalOptions',
            widgetFunc: ({ actionProvider }) => (
                <Options
                    actionProvider={actionProvider}
                    getOptions={getPersonalOptions}
                />
            ),
        },
        {
            widgetName: 'experienceOptions',
            widgetFunc: () => <ExperienceCards />,
        },
        {
            widgetName: 'projectsOptions',
            widgetFunc: () => <ProjectCards />,
        },
        {
            widgetName: 'skillsOptions',
            widgetFunc: () => <SkillCards />,
        },
        {
            widgetName: 'blogsOptions',
            widgetFunc: () => <BlogCards />,
        },
    ],
};

export default ConfigChat;
