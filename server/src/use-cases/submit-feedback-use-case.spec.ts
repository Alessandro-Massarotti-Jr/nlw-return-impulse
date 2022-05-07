import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
);

describe('submit feedback', () => {
    it('should be able to submit a feedback', async ()=>{
        await expect(submitFeedback.execute({
            type:"BUG",
            comment:"example comment",
            screenshot:"data:image/png;base64,sdgdseahdshdhffddfhdshf"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit a feedback whitout a type', async ()=>{
        await expect(submitFeedback.execute({
            type:"",
            comment:"example comment",
            screenshot:"data:image/png;base64,sdgdseahdshdhffddfhdshf"
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback whitout a comment', async ()=>{
        await expect(submitFeedback.execute({
            type:"BUG",
            comment:"",
            screenshot:"data:image/png;base64,sdgdseahdshdhffddfhdshf"
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback whitout a invalid screenshot', async ()=>{
        await expect(submitFeedback.execute({
            type:"BUG",
            comment:"Example comment",
            screenshot:"test.png"
        })).rejects.toThrow();
    })

})