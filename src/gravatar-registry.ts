import {
  CreateGravatarCall,
  NewGravatar as NewGravatarEvent,
  UpdatedGravatar as UpdatedGravatarEvent
} from "../generated/GravatarRegistry/GravatarRegistry"
import { Gravatar,Transaction} from "../generated/schema"

export function handleNewGravatar(event: NewGravatarEvent): void {
  let gravatar = new Gravatar(event.params.id.toString());
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl

  gravatar.blockNumber = event.block.number
  gravatar.blockTimestamp = event.block.timestamp
  gravatar.transactionHash = event.transaction.hash

  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatarEvent): void {
  let id = event.params.id.toString();
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl

  gravatar.blockNumber = event.block.number
  gravatar.blockTimestamp = event.block.timestamp
  gravatar.transactionHash = event.transaction.hash

  gravatar.save()
}


export function handleCreateGravatar(call: CreateGravatarCall): void {
  let id = call.transaction.hash.toHexString()
  let transaction = new Transaction(id)
  transaction.displayName = call.inputs._displayName
  transaction.imageUrl = call.inputs._imageUrl
  transaction.save()
}